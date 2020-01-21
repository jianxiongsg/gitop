export interface HistoryParams {
    commit: string;
    date: string;
}
export declare class GitOp {
    /**
     * 在指定路径init git
     * @param path
     */
    init(path: string): Promise<{}>;
    getVersion(path: string): Promise<{}>;
    writeFile(path: string, content: string): Promise<{}>;
    readFile(path: string): Promise<string>;
    setTag(path: string, v: string, m?: string): Promise<{}>;
    showTag(path: string, v: string): Promise<{}>;
    /**
     * 增加上传文件
     * @param path
     */
    add(path: string, parm?: string): Promise<{}>;
    /**
     * 上传到本地
     * @param path
     * 上传起名
     * @param m
     */
    commit(path: string, m?: string): Promise<{}>;
    /**
     * 更到最新
     * @param path
     */
    pull(path: string): Promise<{}>;
    /**
     * 上传到当前分支
     * @param path
     * 上传起名
     * @param m
     */
    push(path: string, m?: string): Promise<{}>;
    /**
     * 切换到指定commit
     * @param path
     * @param commit
     */
    checkoutCommit(path: string, commit: string): Promise<{}>;
    /**
     * 直接删除目录就行
     * @param path
     */
    deleteRepositiory(path: string): void;
    /**
     * 获得历史上传
     * @param path
     */
    listHistory(path: string): Promise<HistoryParams[]>;
    getCurBranch(path: string, cb: (branch: any) => void): void;
    run(cmd: string, args: string[], cwd: string, cb: (data: any, err: any) => void, onFinish?: () => void): void;
    /**
     * 转换 git log
     *
     */
    convertLog(str: string): {
        commit: string;
        date: string;
    }[];
}
