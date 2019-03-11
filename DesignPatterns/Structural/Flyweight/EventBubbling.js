/**
<div id="container">
    <div class="toggle" href="#">More Info (Address)
        <span class="info">
            This is more information
        </span>
    </div>
    <div class="toggle" href="#">Even More Info (Map)
        <span class="info">
            <iframe src="http://www.map-generator.net/extmap.php?name=London&amp;address=london%2C%20england&amp;width=500...gt;"</iframe>
        </span>
    </div>
</div>
**/

const stateManager = {
    fly() {
        const self = this;

        $('#container')
            .unbind()
            .on('click', 'div.toggle', ({ target }) => {
                self.handleClick(target);
            });
    },

    handleClick(elem) {
        $(elem)
            .find('span')
            .toggle('slow');
    },
};

$('div').on('click', function() {
    console.log(`You clicked: ${$(this).attr('id')}`);
});

// we should avoid using the DOM element to create a
// jQuery object (with the overhead that comes with it)
// and just use the DOM element itself like this:

$('div').on('click', function() {
    console.log(`You clicked:${this.id}`);
});