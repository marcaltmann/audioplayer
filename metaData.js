const request = require('request');
const OGG = require('ogg-parser');
const seneca = require('seneca')();

module.exports = function metaData(options) {
  this.add({role: 'metadata', cmd: 'get'}, (args, done) => {
    let url = args.url;

    let parser = request(url).pipe(new OGG());
    let metaData = {};

    parser.on('data', (tag) => {
      metaData[tag.type] = tag.value;
    });

    parser.on('end', () => {
      done(null, {
        url,
        metaData,
      });
    });
  });
};
