import express from "express";
import UserModel from "../model/user.js";

const UserMiddleware = {
  validateNewUser: async (req, res, next) => {
    try {
      const {
        fullname,
        dateOfBirth,
        placeOfBirth,
        nationality,
        education,
        password,
      } = req.body;
      if(!fullname || !dateOfBirth || !placeOfBirth || !nationality || !education || !password) {
        throw new Error("Yêu cầu nhập đầy đủ thông tin")
      }
      return next();
    } catch (error) {
        res.status(401).send({
            message: error.message
        })
    }
  },
  checkIfUserExist: async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await UserModel.findOne({_id: id});
        // if(!result) throw new Error();
        next()
    } catch (error) {
        res.status(401).send({
            message: error.message
        })
    }
  }
};

export default UserMiddleware