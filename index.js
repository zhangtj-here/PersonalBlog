const express = require("express");
let globalConfig = require("./config.js");
let loader = require("./loader");

let app = new express();

app.use(express.static(globalConfig["page_path"]));

app.post("/editEveryDay", loader.get("/editEveryDay"));
app.get("/queryEveryDay", loader.get("/queryEveryDay"));

app.listen(globalConfig.port, function () {
    console.log("服务已启动");
})