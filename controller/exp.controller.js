import WorkExpModel from "../model/skill.js";
import UserModel from "../model/user.js";

const WorkExpController = {
  AddWorkExpInfo: async (req, res) => {
    try {
      let {
        projectName,
        startDate,
        endDate,
        description,
        company,
        role,
        userId,
      } = req.body;
      if (
        !projectName ||
        !startDate ||
        !description ||
        !company ||
        !role ||
        !userId
      ) {
        throw new Error("Yêu cầu nhập đủ thông tin cần thiết");
      }
      if (!endDate) {
        endDate = null;
      }
      const newUserInfo = {
        projectName,
        startDate,
        endDate,
        description,
        company,
        role,
        userId,
      };

      const addDataToUser = await WorkExpModel.create(newUserInfo);

      res.status(201).send({
        data: addDataToUser,
        message: "Success",
      });
    } catch (error) {
      res.status(401).send({
        message: error.message,
      });
    }
  },
  getUserInfo: async (req, res) => {
    const { userId } = req.params;
    const data = await WorkExpModel.findOne({ userId: userId });
    res.status(201).send({
      data,
      message: "Success",
    });
  },
  updateInfo: async (req, res) => {
    const {
        _id,
        projectName,
        startDate,
        endDate,
        description,
        company,
        role,
        userId,} = req.body;
    const updateData = await WorkExpModel.updateOne(
      { _id: _id },
      {
        projectName,
        startDate,
        endDate,
        description,
        company,
        role,
        userId
      }
    );
    res.status(201).send({
        message: 'Success'
    })
  },
  deleteInfo: async (req, res) => {
    const {_id} = req.body;
    const deletaData = await WorkExpModel.deleteOne(
        {_id: _id}
    );
    res.status(201).send({
        message: 'Success'
    })
  }
};

export default WorkExpController;
