<form id="flickrSearch">

    <input type="text" name="tag" id="query"/>

    <input type="submit" name="submit" value="submit"/>

    </form>



    <div id="lastQuery"></div>

    <ol id="searchResults"></ol>



    <script id="resultTemplate" type="text/html">
    <% _.each(items, function( item ){ %>
    <li><img src="<%= item.media.m %>"/></li>
            <% });%>
</script>
//********************** Snippet 8 **********************//
// [ES2015+] We used new keyword const for immutable constant declaration
// [ES2015+] We used new arrow function syntax
// [ES2015+] We used new template literals for string interpolation
;($ => {
    // Pre-compile template and "cache" it using closure
    const resultTemplate = _.template($('#resultTemplate').html());

    // Subscribe to the new search tags topic
    $.subscribe('/search/tags', (e, tags) => {
        $('#lastQuery').html(`<p>Searched for:<strong>${tags}</strong></p>`);
    });

    // Subscribe to the new results topic
    $.subscribe('/search/resultSet', (e, results) => {
        $('#searchResults')
            .empty()
            .append(resultTemplate(results));
    });

    // Submit a search query and publish tags on the /search/tags topic
    $('#flickrSearch').submit(function(e) {
        e.preventDefault();
        const tags = $(this)
            .find('#query')
            .val();

        if (!tags) {
            return;
        }

        $.publish('/search/tags', [$.trim(tags)]);
    });

    // Subscribe to new tags being published and perform
    // a search query using them. Once data has returned
    // publish this data for the rest of the application
    // to consume
    // [ES2015+] We used the destructuring assignment syntax that makes it possible to unpack values from data structures into distinct variables.
    $.subscribe('/search/tags', (e, tags) => {
        $.getJSON(
            'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
            {
                tags,
                tagmode: 'any',
                format: 'json',
            },
            // [ES2015+] The destructuring assignment as function parameter
            ({ items }) => {
                if (!items.length) {
                    return;
                }
                // [ES2015+] New shorthand property names in object creation, if variable name equal to object key
                $.publish('/search/resultSet', { items });
            }
        );
    });
})(jQuery);