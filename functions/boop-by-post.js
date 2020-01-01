// This serverless function only handles parameters set in POST requests.
const qs = require('querystring');

exports.handler = async event => {
  // POST params may be sent as query strings, JSON, or form-encoded data
  let args;
  if (event.queryStringParameters.boopee) {
    args = event.queryStringParameters;
  } else if (event.headers['content-type'] === 'application/json') {
    // if the request was sent with a JSON type header, parse as JSON
    args = JSON.parse(event.body);
  } else {
    // otherwise, try parsing it as form-encoded data
    args = qs.parse(event.body);
  }

  console.log(args);

  const boopee = args.boopee || 'a friend';

  return {
    statusCode: 200,
    body: `You booped ${boopee} on the nose. Boop!`,
  };
};
