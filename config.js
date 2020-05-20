const fs = require("fs");

let globalConfig = {};

let conf = fs.readFileSync("./server.conf");

let configArr = conf.toString().split("\n");

for (let i = 0; i < configArr.length; i++) {
    let key = configArr[i].split("=")[0].trim();
    let value = configArr[i].split("=")[1].trim();
    globalConfig[key] = value;
}

module.exports = globalConfig;