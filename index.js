require('seneca')()
  .client()
  .act({role: 'metadata', cmd: 'get', url: 'https://storage.googleapis.com/laomake-music-test/goldberg-variations/kimiko-ishizaka-01-aria.ogg'}, (err, res) => {
    console.log(res);
  });
