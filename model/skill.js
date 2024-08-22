// import { type } from "express/lib/response";
import mongoose from "mongoose";

const workExperienceSchema = new mongoose.Schema({
    projectName: String,
    startDate: Date,
    endDate: Date, // null if ongoing
    description: String,
    company: String,
    role: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const WorkExpModel = mongoose.model('WorkExp', workExperienceSchema);

export default WorkExpModel;