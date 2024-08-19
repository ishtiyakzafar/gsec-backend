import mongoose from "../../connnect.js";

const keyFeatureModel = new mongoose.Schema(
    {
        keyFeature: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("KeyFeature", keyFeatureModel);
