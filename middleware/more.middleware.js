import AdditionalModel from "../model/more.js";
import UserModel from "../model/user.js";

const AdditionalMiddleware = {
  checkAuthentication: async (req, res, next) => {
    try {
      const { userId, password } = req.body;
      if (!userId || !password)
        throw new Error("Yêu cầu nhập đủ id và password");
      const data = await UserModel.findOne({ _id: userId });
      if (!data || String(data.password) !== String(password))
        throw new Error("Sai tên tài khoản hoặc mật khẩu");
      return next();
    } catch (error) {
      res.status(401).send({
        message: error.message,
      });
    }
  },
  checkIfInfoExist: async (req, res, next) => {
    try {
      const { userId } = req.body;
      const result = await AdditionalModel.findOne({userId:userId});
      if (!result) throw new Error("Không tồn tại Info của Id này");
      return next();
    } catch (error) {
      res.status(401).send({
        message: error.message,
      });
    }
  },
  checkAuthorization: async (req, res, next) => {
    try {
      const { userId, id } = req.body;
      if (!userId || !id) throw new Error("Thiếu thông tin cần thiết");
      const data = await AdditionalModel.findOne({ _id: id });
      if (String(data.userId) !== String(userId))
        throw new Error("Bạn ko có quyền chỉnh sửa thông tin!");
      next();
    } catch (error) {
      res.status(401).send({
        message: error.message,
      });
    }
  },
};

export default AdditionalMiddleware;
