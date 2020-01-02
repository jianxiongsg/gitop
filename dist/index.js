"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
commander_1.default
    .usage("<command> [options]")
    .option("-v, --verbose", "显示详细执行过程")
    .option("-d, --dirctory <value>", "文件根目录(package.json存在的目录)")
    .option("-t, --interval <value>", "检测的间隔时间")
    .parse(process.argv);
var type = commander_1.default.type;
console.log('.......type ', type);
// if(type === 'd'){
// }else if(type === 't'){
// }else{
//     program.help();
// }
var AutoCheckVersion = /** @class */ (function () {
    function AutoCheckVersion(p) {
        this._path = p;
    }
    return AutoCheckVersion;
}());
