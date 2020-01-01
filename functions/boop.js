const fs = require('fs');

// read the image file relative to the source root directory
const image = fs.readFileSync(`${process.cwd()}/assets/boop.gif`);

// images need to be sent as base64-encoded strings
const base64Image = image.toString('base64');

exports.handler = async () => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'image/gif',
  },
  body: base64Image,
  isBase64Encoded: true,
});
