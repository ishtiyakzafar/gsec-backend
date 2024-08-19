import mongoose from "../../connnect.js";

const tbillTypesModel = new mongoose.Schema(
    {
        description: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("TbillTypes", tbillTypesModel);
