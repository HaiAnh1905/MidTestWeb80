import express from "express";
import connectDatabase from "./database/db.js";
import UserModel from "./model/user.js";
import UserController from "./controller/user.controller.js";
import { RootRouterV1, RootRouterV2, RootRouterV3 } from "./routers/index.js";
const app = express();
app.use(express.json());

connectDatabase()

app.use('/users', RootRouterV1)
app.use('/user-experience', RootRouterV2)
app.use('/user-additional-info', RootRouterV3)

app.listen('8080', () => {
    console.log('Server is running!');
    
})