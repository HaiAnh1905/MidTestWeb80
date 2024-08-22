import { Router } from "express";
import WorkExpController from "../controller/exp.controller.js";
import WorkExpMiddleware from "../middleware/exp.middleware.js";
import UserMiddleware from "../middleware/user.middleware.js";

const WorkExpRouter = Router();

WorkExpRouter.post('/addExpCareer',WorkExpMiddleware.checkAuthentication, WorkExpController.AddWorkExpInfo);

WorkExpRouter.get('/getUserExpInfo', WorkExpMiddleware.checkAuthentication,WorkExpMiddleware.checkIfInfoExist , WorkExpController.getUserInfo);

WorkExpRouter.put('/updateExpInfo',WorkExpMiddleware.checkAuthentication,WorkExpMiddleware.checkIfInfoExist, WorkExpMiddleware.checkAuthorization, WorkExpController.updateInfo)

WorkExpRouter.delete('/deleteInfo',WorkExpMiddleware.checkAuthentication,WorkExpMiddleware.checkIfInfoExist ,WorkExpMiddleware.checkAuthorization, WorkExpController.deleteInfo)

export default WorkExpRouter