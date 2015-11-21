var request = require('request');
var Iconv = require('iconv').Iconv;
var jsdom = require('jsdom');

module.exports = function(opts, callback) {
  var callback = callback || false;
  var opts = opts || {};
  var reqOpts = {};
  reqOpts.encoding = 'binary';

  opts.encoding = opts.encoding || false;
  opts.blocked = opts.blocked || false;

  if (!opts.url) {
    throw new Error('Must supply url');
  } else {
    reqOpts.url = opts.url;
  }

  // cheatting the server
  if (opts.blocked) reqOpts.headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:43.0) Gecko/20100101 Firefox/43.0'};
  if (opts.encoding && (!opts.sourceEncoding || !opts.sourceEncoding)) throw new Error('Must specify source & target encoding');

  request(reqOpts, function (err, res, html) {
    if (opts.encoding) {
      var iconv = new Iconv(opts.sourceEncoding, opts.targetEncoding + '//TRANSLIT//IGNORE');
      var bodyBuffer = new Buffer(html, 'binary');

      html = iconv.convert(bodyBuffer).toString();
    }

    jsdom.env({
      scripts: ["http://code.jquery.com/jquery.js"],
      html: html,
      done: function (err, window) {
        var $ = window.$;

        callback(err, $);
      }
    });
  });
}

