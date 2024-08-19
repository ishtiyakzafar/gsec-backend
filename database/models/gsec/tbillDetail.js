import mongoose from "../../connnect.js";

const tbillDetailModel = new mongoose.Schema(
    {
        description: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("TbillDetail", tbillDetailModel);
