import { Router } from "express";
import UserRouter from "./user.router.js";
import WorkExpRouter from "./exp.router.js";

const RootRouterV1 = Router();
const RootRouterV2 = Router();

RootRouterV1.use('', UserRouter);
RootRouterV2.use('', WorkExpRouter)

export {
    RootRouterV1,
    RootRouterV2
}