import { GitOp } from "./GitOp";
import path from 'path';
import chokidar from 'chokidar';



export class GitMgr{
    private _path:string;
    private _gitOp:GitOp;
    private _preV:string;
    private _packagePath:string;
    constructor(fpath:string){
        this._path = fpath;
        this._packagePath = path.join(this._path,'package.json');
        this._gitOp = new GitOp();
        this._preV = '';
    }

    autoStart(){
        console.log('开始监听文件：'+this._packagePath);
        chokidar.watch(this._packagePath).on('change',(path,status)=>{
            this.check();
        })
    }

    check(){
        this._gitOp.getVersion(this._packagePath).then((newV:unknown)=>{
            let v = newV as string;
            if(!this._preV || this._preV != v){
                this._preV = v;
                console.log('this._path',this._path);
                this._gitOp.add(this._path).then(()=>{
                    this._gitOp.commit(this._path).then(()=>{
                        this._gitOp.setTag(this._path,v).then(()=>{
                            console.log('commit success ',v);
                            // this._gitOp.showTag(this._path,v)
                        }).catch((err:string)=>{
                            console.log('err',err)
                        });
                    }).catch((err:string)=>{
                        console.log('err',err)
                    });
                }).catch((err:string)=>{
                    console.log('err',err)
                });
            }
        }).catch((err:string)=>{
            console.log('err',err)
        })
        
    }

}