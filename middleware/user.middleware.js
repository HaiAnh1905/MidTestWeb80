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
      if (
        !fullname ||
        !dateOfBirth ||
        !placeOfBirth ||
        !nationality ||
        !education ||
        !password
      ) {
        throw new Error("Yêu cầu nhập đầy đủ thông tin");
      }
      return next();
    } catch (error) {
      res.status(401).send({
        message: error.message,
      });
    }
  },
  // checkIfUserExist: async (req, res, next) => {
  //   try {
  //       const {id} = req.body;
  //       const result = await UserModel.findOne({_id: id});
  //       // if(!result) throw new Error();
  //       return next()
  //   } catch (error) {
  //       res.status(401).send({
  //           message: error.message
  //       })
  //   }
  // },
  checkAuthentication: async (req, res, next) => {
    try {
      const { id, password } = req.body;
      if (!id || !password) throw new Error("Yêu cầu nhập đủ id và password");
      const data = await UserModel.findOne({ _id: id });
      if (!data || String(data.password) !== String(password))
        throw new Error("Sai tên tài khoản hoặc mật khẩu");
      return next();
    } catch (error) {
      res.status(401).send({
        message: error.message,
      });
    }
  },
  checkAuthorization: async (req, res, next) => {
    try {
      const { id, personalId  } = req.body;
      if(!personalId) throw new Error("Yêu cầu nhập personalId nếu muốn cập nhập thông tin")
      const data = await UserModel.findById(personalId);
      if (String(data._id) !== String(id))
        throw new Error("Bạn ko có quyền chỉnh sửa thông tin!");
      return next();
    } catch (error) {
      res.status(401).send({

        message: error.message,
      });
    }
  },
};

export default UserMiddleware;
