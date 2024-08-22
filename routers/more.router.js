import { Router } from "express";
import AdditionalModel from "../model/more.js";
import AdditoinalController from "../controller/more.controller.js";
import AdditionalMiddleware from "../middleware/more.middleware.js";

const AdditionalRouter = Router();

AdditionalRouter.post('/addAdditionalInfo', AdditionalMiddleware.checkAuthentication, AdditoinalController.addAdditionInfo);

AdditionalRouter.get('/viewAdditionalInfo', AdditionalMiddleware.checkAuthentication, AdditionalMiddleware.checkIfInfoExist, AdditoinalController.viewAdditionalInfo)

AdditionalRouter.put('/updateAdditionalInfo', AdditionalMiddleware.checkAuthentication, AdditionalMiddleware.checkIfInfoExist, AdditionalMiddleware.checkAuthorization, AdditoinalController.updateAdditionalInfo)

AdditionalRouter.delete('/deleteAdditionalInfo', AdditionalMiddleware.checkAuthentication, AdditionalMiddleware.checkIfInfoExist, AdditionalMiddleware.checkAuthorization, AdditoinalController.deleteAdditionalInfo)

export default AdditionalRouter