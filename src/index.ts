#!/usr/bin/env node
import program from "commander";
import { GitMgr } from "./GitMgr";
import { GitOp } from "./GitOp";


program
    .usage("<command> [options]")
    .option("-v, --verbose", "显示详细执行过程")
    .option("-d, --dirctory <value>", "文件根目录(package.json存在的目录)")
    .parse(process.argv);

if(!program.dirctory){
    program.help();
}else{
    let d = program.dirctory;
    let gitMgr = new GitMgr(d);
    gitMgr.autoStart();
}





