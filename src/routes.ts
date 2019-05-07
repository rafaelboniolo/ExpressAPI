import {Router} from 'express';

import UserController from './controllers/UserController';
import RequestMonitorController from './controllers/RequestMonitorController';


const routes = Router();

routes.get("/users",       UserController.list);
routes.post("/user",       UserController.create);
routes.put("/user/:id",    UserController.update);
routes.delete("/user/:id", UserController.delete);
routes.get("/user/:id",    UserController.findOne);

routes.get("/monitor", RequestMonitorController.list)



export default routes;