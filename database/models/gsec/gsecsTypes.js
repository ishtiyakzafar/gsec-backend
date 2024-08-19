import mongoose from "../../connnect.js";

const gsecsTypesModel = new mongoose.Schema(
    {
        description: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("GsecsTypes", gsecsTypesModel);
