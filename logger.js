module.exports = function logger(options) {
  this.add({role: 'info', cmd: 'metadata'}, (args) => {
    let url = args.url;
    let metaData = args.metaData;

    console.log(url, metaData);
  });
}
