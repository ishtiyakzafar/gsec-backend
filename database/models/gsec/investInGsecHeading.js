import mongoose from "../../connnect.js";

const investInGsecHeadingModel = new mongoose.Schema(
    {
        heading: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("InvestInGsecHeading", investInGsecHeadingModel);
