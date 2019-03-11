// Differences Between The Observer And Publish/Subscribe Pattern
//*******************************************************//

//********************** Snippet 1 **********************//
// [ES2015+] We used new keyword const for immutable constant declaration
// [SE2015+] We used new keyword let, which declares a block scope local variable
// [ES2015+] We used new arrow function syntax

// A very simple new mail handler

// A count of the number of messages received
let mailCounter = 0;

// Initialize subscribers that will listen out for a topic
// with the name "inbox/newMessage".

// Render a preview of new messages
const subscriber1 = subscribe('inbox/newMessage', (topic, data) => {
    // Log the topic for debugging purposes
    console.log('A new message was received: ', topic);

    // Use the data that was passed from our subject
    // to display a message preview to the user
    $('.messageSender').html(data.sender);
    $('.messagePreview').html(data.body);
});

// Here's another subscriber using the same data to perform
// a different task.

// Update the counter displaying the number of new
// messages received via the publisher

const subscriber2 = subscribe('inbox/newMessage', (topic, data) => {
    $('.newMessageCounter').html(++mailCounter);
});

publish('inbox/newMessage', [
    {
        sender: 'hello@google.com',
        body: 'Hey there! How are you doing today?',
    },
]);
