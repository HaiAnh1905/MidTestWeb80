import mongoose from "mongoose";

const MONGO_URL = "mongodb://localhost:27017";
const MONGO_COLLECTION = "dataUser";

const MONGO_CONNECT = `${MONGO_URL}/${MONGO_COLLECTION}`;

const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGO_CONNECT);
    console.log("🚀Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

export default connectDatabase;