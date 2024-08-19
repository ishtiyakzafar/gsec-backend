import mongoose from "../../connnect.js";

const investInGsecDataModel = new mongoose.Schema(
    {
        description: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("InvestInGsecData", investInGsecDataModel);
