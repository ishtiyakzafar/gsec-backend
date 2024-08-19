import mongoose from "../../connnect.js";

const datedGsecModel = new mongoose.Schema(
    {
        description: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("DatedGsec", datedGsecModel);
