import mongoose from "mongoose";

const AdditionalInfoSchema = new mongoose.Schema({
    hobbies: String,
    goals: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

const AdditionalModel = mongoose.model('MoreInfo', AdditionalInfoSchema);

export default AdditionalModel