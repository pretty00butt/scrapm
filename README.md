# scrapm
more convenient scraper for node.js

## Usage

```javascript
var scrapm = require('scrapm');

scrapm([options], callback);
```

`options` are request options:
- **url** - (required) target url you want to scrape
- **blocked** - default `false`, `true` if the server is blocking scraping by machine. it cheats the server by changhing 'User-Agent' in header.
- **encoding** - default `false`, `true` if the encoding of the webpage is not `utf-8`.
- **sourceEncoding** - default `''`, encoding of the webpage if `options.encoding` is `true`
- **targetEncoding** - default `''`, encoding you want to get if `options.encoding` is `true`

`callback` is called with `(err, html)`. you have got a full html text that you want. you can now manipulate this `html` with some modules such as jsdom or cheerio.
