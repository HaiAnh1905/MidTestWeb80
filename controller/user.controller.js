import UserModel from "../model/user.js";
import crypto from "crypto";
import WorkExpModel from "../model/skill.js";

const UserController = {
  createNewUser: async (req, res) => {
    try {
      const {
        fullname,
        dateOfBirth,
        placeOfBirth,
        nationality,
        education,
        password,
      } = req.body;
      const newUser = {
        fullname,
        dateOfBirth,
        placeOfBirth,
        nationality,
        education,
        password,
      };
      // Correct way to create a user with Mongoose
      const createdUser = await UserModel.create(newUser);

      res.status(201).send({
        data: createdUser,
        message: "User created successfully",
      });
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
  },
  getUserData: async (req, res) => {
    const { id } = req.body;
    const data = await UserModel.findById(id);
    res.status(201).send({
      data,
      message: "Success",
    });
  },
  updateUserData: async (req, res) => {
    const {
      id,
      fullname,
      dateOfBirth,
      placeOfBirth,
      nationality,
      education,
      password,
    } = req.body;
    const updateData = await UserModel.updateOne(
      { _id: id },
      {
        fullname,
        dateOfBirth,
        placeOfBirth,
        nationality,
        education,
        password,
      }
    );
    res.status(201).send({
      message: "Success",
    });
  },
  deleteUserData: async (req, res) => {
    const { id } = req.body;
    const deletaData = await UserModel.deleteOne({ _id: id });
    const deleteInfo = await WorkExpModel.deleteOne({ userId: id });
    res.status(201).send({
      message: "Success",
    });
  },
};

export default UserController;
