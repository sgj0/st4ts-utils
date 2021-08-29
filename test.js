const {st4ts, logKeywords} = require("./index.js");

const site = "site";
const ip = "127.0.0.1";
const keywords = "keywords";

st4ts(site, ip, err => {
  console.log(err);
});

logKeywords(site, ip, keywords, err => {
  console.log(err);
});
