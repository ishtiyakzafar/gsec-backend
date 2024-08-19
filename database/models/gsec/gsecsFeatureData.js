import mongoose from "../../connnect.js";

const gsecsFeatureDataModel = new mongoose.Schema(
    {
        description: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("gsecsFeatureData", gsecsFeatureDataModel);
