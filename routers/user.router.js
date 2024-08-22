import { Router } from "express";
import UserController from "../controller/user.controller.js";
import UserMiddleware from "../middleware/user.middleware.js";

const UserRouter = Router();

UserRouter.post('/createUser', UserMiddleware.validateNewUser ,UserController.createNewUser);

UserRouter.get('/getUser', UserMiddleware.checkIfUserExist, UserController.getUserData)

UserRouter.post('/updateUser', UserMiddleware.checkIfUserExist, UserController.updateUserData)

UserRouter.delete('/deleteUser', UserMiddleware.checkIfUserExist, UserController.deleteUserData)

export default UserRouter