import {Request, Response} from 'express'
import User from '../schemas/User'
import iController from './iController';

class UserController implements iController{
    
    public async create(req:Request, res:Response):Promise<Response>{
        const user = await User.create(req.body);
        return res.json(user);
    }
    public async list(req:Request, res:Response):Promise<Response>{
        const users = await User.find();        
        return res.json(users);
    }
}

export default new UserController();