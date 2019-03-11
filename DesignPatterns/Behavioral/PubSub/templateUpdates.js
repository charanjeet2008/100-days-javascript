<script id="userTemplate" type="text/html">
<li><%= name %></li>
    </script>

    <script id="ratingsTemplate" type="text/html">
<li><strong><%= title %></strong> was rated <%= rating %>/5</li>
</script>


<div id="container">

    <div class="sampleForm">
    <p>
    <label for="twitter_handle">Twitter handle:</label>
<input type="text" id="twitter_handle" />
    </p>
    <p>
    <label for="movie_seen">Name a movie you've seen this year:</label>
<input type="text" id="movie_seen" />
    </p>
    <p>

    <label for="movie_rating">Rate the movie you saw:</label>
<select id="movie_rating">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5" selected>5</option>

</select>
</p>
<p>

<button id="add">Submit rating</button>
</p>
</div>



<div class="summaryTable">
    <div id="users"><h3>Recent users</h3></div>
<div id="ratings"><h3>Recent movies rated</h3></div>
</div>

</div>
//********************** Snippet 6 **********************//
// [ES2015+] We used new keyword const for immutable constant declaration
// [ES2015+] We used new arrow function syntax
;($ => {
    // Pre-compile templates and "cache" them using closure
    const userTemplate = _.template($('#userTemplate').html());

    const ratingsTemplate = _.template($('#ratingsTemplate').html());

    // Subscribe to the new user topic, which adds a user
    // to a list of users who have submitted reviews
    $.subscribe('/new/user', (e, data) => {
        if (data) {
            $('#users').append(userTemplate(data));
        }
    });

    // Subscribe to the new rating topic. This is composed of a title and
    // rating. New ratings are appended to a running list of added user
    // ratings.
    $.subscribe('/new/rating', (e, data) => {
        if (data) {
            $('#ratings').append(ratingsTemplate(data));
        }
    });

    // Handler for adding a new user
    // [ES2015+] Parentheses are optional when there is only one parameter
    $('#add').on('click', e => {
        e.preventDefault();

        const strUser = $('#twitter_handle').val();
        const strMovie = $('#movie_seen').val();
        const strRating = $('#movie_rating').val();

        // Inform the application a new user is available
        $.publish('/new/user', {
            name: strUser,
        });

        // Inform the app a new rating is available
        $.publish('/new/rating', {
            title: strMovie,
            rating: strRating,
        });
    });
})(jQuery);
