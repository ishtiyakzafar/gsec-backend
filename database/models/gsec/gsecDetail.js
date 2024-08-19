import mongoose from "../../connnect.js";

const gsecDetailModel = new mongoose.Schema(
    {
        description: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("GsecDetail", gsecDetailModel);
