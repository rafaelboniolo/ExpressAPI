import {Router} from 'express';

import UserController from './controllers/UserController';
import RequestMonitorController from './controllers/RequestMonitorController';


const routes = Router();

routes.get("/users", UserController.list);
routes.post("/users", UserController.create);

routes.get("/monitor", RequestMonitorController.list)


export default routes;