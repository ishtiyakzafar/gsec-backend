import mongoose from "../../connnect.js";

const AdvantageModel = new mongoose.Schema(
    {
        advantage: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Advantage", AdvantageModel);
