import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: String,
    dateOfBirth: String,
    placeOfBirth: String,
    nationality: String,
    education: String,
    password: String,
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
