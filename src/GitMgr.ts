import { GitOp } from "./GitOp";
import path from 'path';



export class GitMgr{
    private _path:string;
    private _interval:number;
    private _gitOp:GitOp;
    private _preV:string;
    constructor(fpath:string,interval:number){
        this._path = fpath;
        this._interval = interval;
        this._gitOp = new GitOp();
        this._preV = '';
        
    }

    autoStart(){
        setInterval(()=>{
            this.check();
        },this._interval)
    }

    async check(){
        let packagePath = path.join(this._path,'package.json')
        let newV = await this._gitOp.getVersion(packagePath)
        if(!this._preV || this._preV != newV){
            this._gitOp.add(this._path).then(()=>{
                this._gitOp.commit(this._path)
            }).catch((err:string)=>{
                console.log('err',err)
            });

        }
    }

}