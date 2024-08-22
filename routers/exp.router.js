import { Router } from "express";
import WorkExpController from "../controller/exp.controller.js";
import WorkExpMiddleware from "../middleware/exp.middleware.js";

const WorkExpRouter = Router();

WorkExpRouter.post('/addExpCareer',WorkExpMiddleware.checkIfUserExist, WorkExpController.AddWorkExpInfo);

WorkExpRouter.get('/getUserExpInfo/:userId', WorkExpMiddleware.checkIfUserExist, WorkExpController.getUserInfo);

WorkExpRouter.put('/updateExpInfo', WorkExpMiddleware.checkAuth, WorkExpController.updateInfo)

WorkExpRouter.delete('/deleteInfo', WorkExpMiddleware.checkAuth, WorkExpController.deleteInfo)

export default WorkExpRouter