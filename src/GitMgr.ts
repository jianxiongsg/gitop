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

    check(){
        let packagePath = path.join(this._path,'package.json')
        this._gitOp.getVersion(packagePath).then((newV:unknown)=>{
            let v = newV as string;
            if(!this._preV || this._preV != v){
                this._gitOp.add(this._path).then(()=>{
                    this._gitOp.commit(this._path);
                    this._gitOp.setTag(this._path,v);
                }).catch((err:string)=>{
                    console.log('err',err)
                });
    
            }
        }).catch((err:string)=>{
            console.log('err',err)
        })
        
    }

}