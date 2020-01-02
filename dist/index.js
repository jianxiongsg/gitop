#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var GitMgr_1 = require("./GitMgr");
commander_1.default
    .usage("<command> [options]")
    .option("-v, --verbose", "显示详细执行过程")
    .option("-d, --dirctory <value>", "文件根目录(package.json存在的目录)")
    .option("-t, --interval <value>", "检测的间隔时间")
    .parse(process.argv);
if (!commander_1.default.dirctory) {
    commander_1.default.help();
}
else {
    var t = commander_1.default.interval || 1000;
    var d = commander_1.default.dirctory;
    var gitMgr = new GitMgr_1.GitMgr(d, t);
    gitMgr.autoStart();
}
// if(type === 'd'){
// }else if(type === 't'){
// }else{
//     program.help();
// }
