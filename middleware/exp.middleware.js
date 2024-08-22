import express from "express";
import WorkExpModel from "../model/skill.js";
import UserModel from "../model/user.js";

const WorkExpMiddleware = {
    checkIfUserExist: async (req, res, next) => {
        try {
            const {userId} = req.body;
            const result = await UserModel.findById(userId);
            if(!result) throw new Error("Không tồn tại Id của User này")
            return next()
        } catch (error) {
            res.status(401).send({
                message: error.message
            })
        }
    },
    checkAuth: async (req, res, next) => {
        try {
            const{userId, _id} = req.body;
            if(!userId || !_id) throw new Error("Thiếu thông tin cần thiết")
            const data = await WorkExpModel.findOne({_id: _id})
            if(String(data.userId) !== String(userId)) throw new Error("Bạn ko có quyền chỉnh sửa thông tin!")
            next();
        } catch (error) {
            res.status(401).send({
                message: error.message
            })
        }
    }
};

export default WorkExpMiddleware