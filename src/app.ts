import express from "express"
import mongoose from 'mongoose'
import routes from './routes'
import RequestMonitorController from './controllers/RequestMonitorController'
import Auth from "./security/Auth";
import mongoConfig from "./database/mongoConfig";

class App{
    public express: express.Application;

    public constructor(){
        this.express = express();

        this.middlewares();
        this.routes();
        this.database()
    }

    private middlewares():void{
        this.express.use(express.json());
        this.express.use(RequestMonitorController.create)
        this.express.use(Auth.authenticate)
    }

    private database():void{
        mongoose.connect(mongoConfig,{useNewUrlParser:true});
    }

    private routes():void{
        this.express.use(routes);
        // this.express.get('/easy',(req,res)=>{
        //     return res.send("Modo Easy")
        // })
    }   
}
export default new App().express;