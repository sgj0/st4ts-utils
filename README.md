st4ts-utils
=======

Fonctions utiles pour st4ts

## Install
`yarn install`

## Usage
```javascript
const {st4ts, logKeywords} = require("st4ts-utils");

const site = "site";
const ip = "127.0.0.1";
const keywords = "keywords";

st4ts(site, ip, err => {
  console.log(err);
});

logKeywords(site, ip, keywords, err => {
  console.log(err);
});
```
