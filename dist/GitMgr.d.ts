export declare class GitMgr {
    private _path;
    private _gitOp;
    private _preV;
    private _packagePath;
    constructor(fpath: string);
    autoStart(): void;
    check(): void;
}
