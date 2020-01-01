const axios = require('axios');

exports.handler = async () => {
  // see https://developers.giphy.com/docs/api/endpoint#random
  const endpoint = 'https://api.giphy.com/v1/gifs/random';
  const result = await axios.get(endpoint, {
    params: {
      api_key: process.env.GIPHY_API_KEY,
      tag: 'boop',
    },
  });

  // see https://developers.giphy.com/docs/api/schema/#gif-object
  const imageURL = result.data.data.images.downsized_large.url;

  // load the image as a buffer so we can convert to Base64
  const imageBuffer = await axios
    .get(imageURL, { responseType: 'arraybuffer' })
    .then(response => Buffer.from(response.data, 'binary'));

  return {
    statusCode: 200,
    body: imageBuffer.toString('base64'),
    isBase64Encoded: true,
  };
};
