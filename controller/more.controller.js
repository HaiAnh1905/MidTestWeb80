import AdditionalModel from "../model/more.js";

const AdditoinalController = {
  addAdditionInfo: async (req, res) => {
    try {
      let { hobbies, goals, userId } = req.body;
      if (!hobbies) hobbies = null;
      if (!goals) goals = null;
      const newAdditionalInfo = {
        hobbies,
        goals,
        userId,
      };
      const statusSave = await AdditionalModel.create(newAdditionalInfo);
      res.status(201).send({
        data: statusSave,
        message: "Success",
      });
    } catch (error) {
      res.status(401).send({
        message: error.message,
      });
    }
  },
  viewAdditionalInfo: async (req, res) => {
    const { userId } = req.body;
    const data = await AdditionalModel.findOne({ userId: userId });
    res.status(201).send({
      data,
      message: "Success",
    });
  },
  updateAdditionalInfo: async (req, res) => {
    const { id, hobbies, goals } = req.body;
    const updateData = await AdditionalModel.updateOne(
      { _id: id },
      {
        hobbies,
        goals,
      }
    );
    res.status(201).send({
      message: "Success",
    });
  },
  deleteAdditionalInfo: async (req, res) => {
    const { id } = req.body;
    const deletaData = await AdditionalModel.deleteOne({ _id: id });
    res.status(201).send({
      message: "Success",
    });
  },
};

export default AdditoinalController;
