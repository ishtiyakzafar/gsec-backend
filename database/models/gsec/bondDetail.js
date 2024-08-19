import mongoose from "../../connnect.js";

const bondDetailModel = new mongoose.Schema(
    {
        description: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("BondDetail", bondDetailModel);
