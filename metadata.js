const request = require('request');
const OGG = require('ogg-parser');
const seneca = require('seneca')();

const plugin = function(options) {

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

seneca.use(plugin);

seneca.act({role: 'metadata', cmd: 'get', url: 'https://storage.googleapis.com/laomake-music-test/goldberg-variations/kimiko-ishizaka-01-aria.ogg'}, (err, res) => {
  console.log(res);
});
