const fs = require('fs');
const pdf = require('html-pdf');

const html = fs.readFileSync(`${process.cwd()}/public/index.html`, 'utf8');

exports.handler = (_event, _context, callback) => {
  pdf.create(html, { format: 'Letter' }).toBuffer((err, buffer) => {
    callback(null, {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/pdf',
      },
      body: buffer.toString('base64'),
      isBase64Encoded: true,
    });
  });
};
