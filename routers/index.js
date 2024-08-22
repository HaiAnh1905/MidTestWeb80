import { Router } from "express";
import UserRouter from "./user.router.js";
import WorkExpRouter from "./exp.router.js";
import AdditionalRouter from "./more.router.js";

const RootRouterV1 = Router();
const RootRouterV2 = Router();
const RootRouterV3 = Router();

RootRouterV1.use('', UserRouter);
RootRouterV2.use('', WorkExpRouter)
RootRouterV3.use('', AdditionalRouter)

export {
    RootRouterV1,
    RootRouterV2,
    RootRouterV3
}