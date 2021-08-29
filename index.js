const https = require("https");
const fs = require("fs");

const URL_ST4TS = "https://sgj0.net/st4ts";
const LOG_FILE = "/logs";

exports.st4ts = (site, ip, cb = () => {}) => {
  const req = https.request(
    URL_ST4TS,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    },
    res => {
      res.setEncoding("utf8");

      res.on("end", () => {
        cb(null);
      });
    }
  );

  req.on("error", e => {
    cb(e);
  });

  req.write(
    JSON.stringify({
      ip,
      site
    })
  );
  req.end();
};

exports.logKeywords = (site, ip, keywords, cb = () => {}) => {
  const date = new Date().toISOString();
  const text = `${date} => ${ip} => ${keywords}\n`;

  fs.appendFile(`${LOG_FILE}/${site}.log`, text, err => {
    cb(err);
  });
};
