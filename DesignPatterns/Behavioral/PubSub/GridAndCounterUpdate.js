// Another simple message handler

// A simple message logger that logs any topics and data received through our
// subscriber
const messageLogger = (topics, data) => {
    console.log(`Logging: ${topics}: ${data}`);
};

// Subscribers listen for topics they have subscribed to and
// invoke a callback function (e.g messageLogger) once a new
// notification is broadcast on that topic
const subscription = pubsub.subscribe('inbox/newMessage', messageLogger);

// Publishers are in charge of publishing topics or notifications of
// interest to the application. e.g:

pubsub.publish('inbox/newMessage', 'hello world!');

// or
pubsub.publish('inbox/newMessage', ['test', 'a', 'b', 'c']);

// or
pubsub.publish('inbox/newMessage', {
    sender: 'hello@google.com',
    body: 'Hey again!',
});

// We can also unsubscribe if we no longer wish for our subscribers
// to be notified
pubsub.unsubscribe(subscription);

// Once unsubscribed, this for example won't result in our
// messageLogger being executed as the subscriber is
// no longer listening
pubsub.publish('inbox/newMessage', 'Hello! are you still there?');

//********************** Snippet 4 **********************//
// [ES2015+] We used new keyword const for immutable constant declaration
// [ES2015+] We used new template literals for string interpolation
// [ES2015+] We used new arrow function syntax

// Return the current local time to be used in our UI later
getCurrentTime = () => {
    const date = new Date();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const y = date.getFullYear();
    const t = date.toLocaleTimeString().toLowerCase();

    return `${m}/${d}/${y} ${t}`;
};

// Add a new row of data to our fictional grid component
const addGridRow = data => {
    // ui.grid.addRow( data );
    console.log(`updated grid component with:${data}`);
};

// Update our fictional grid to show the time it was last
// updated
const updateCounter = data => {
    // ui.grid.updateLastChanged( getCurrentTime() );
    console.log(`data last updated at: ${getCurrentTime()} with ${data}`);
};

// Update the grid using the data passed to our subscribers
const gridUpdate = (topic, data) => {
    if (data !== undefined) {
        addGridRow(data);
        updateCounter(data);
    }
};


// Create a subscription to the newDataAvailable topic
const subscriber = pubsub.subscribe('newDataAvailable', gridUpdate);

// The following represents updates to our data layer. This could be
// powered by ajax requests which broadcast that new data is available
// to the rest of the application.

// Publish changes to the gridUpdated topic representing new entries
pubsub.publish('newDataAvailable', {
    summary: 'Apple made $5 billion',
    identifier: 'APPL',
    stockPrice: 570.91,
});

pubsub.publish('newDataAvailable', {
    summary: 'Microsoft made $20 million',
    identifier: 'MSFT',
    stockPrice: 30.85,
});
