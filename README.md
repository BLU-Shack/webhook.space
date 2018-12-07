# Webhook.Space

A random webhook thing.

Some code is referenced from [dbl-api](https://www.npmjs.com/package/dbl-api)'s [source](https://github.com/xDimGG/dbl-api/blob/master/src/Client.js#L181) [code](https://github.com/xDimGG/dbl-api/blob/master/src/Util.js#L2)

```js
const Space = require('webhook.space');

// options.port (?number) => The port to listen for.
// options.path (?string) => The path/endpoint to watch for POSTs.
// options.token (?string) => The bot/guild's API token to validate an upvote.
const Webhook = new Space.Webhook({ port: 1234, path: '/', token: null });

 // Deactivate/reactivate the webhook.
Webhook.close().open();

 // The upvote event.
Webhook.on('upvote', (body, headers) => {
    // Do something with the body and/or headers.
});
```