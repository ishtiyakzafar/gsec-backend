import mongoose from "../../connnect.js";

const gsecsFeatureHeadingModel = new mongoose.Schema(
    {
        heading: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("GsecsFeatureHeading", gsecsFeatureHeadingModel);
