// This serverless function only handles parameters set in GET requests.
exports.handler = async event => {
  const querystring = event.queryStringParameters;
  const boopee = querystring.boopee || 'a friend';

  return {
    statusCode: 200,
    body: `You booped ${boopee} on the nose. Boop!`,
  };
};
