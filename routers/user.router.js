import { Router } from "express";
import UserController from "../controller/user.controller.js";
import UserMiddleware from "../middleware/user.middleware.js";

const UserRouter = Router();

UserRouter.post('/createUser', UserMiddleware.validateNewUser ,UserController.createNewUser);

UserRouter.get('/getUser', UserMiddleware.checkAuthentication, UserController.getUserData)

UserRouter.put('/updateUser', UserMiddleware.checkAuthentication,UserMiddleware.checkAuthorization, UserController.updateUserData)

UserRouter.delete('/deleteUser', UserMiddleware.checkAuthentication, UserController.deleteUserData)

export default UserRouter