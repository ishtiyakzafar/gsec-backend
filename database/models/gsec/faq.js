import mongoose from "../../connnect.js";

const GsecFaqModel = new mongoose.Schema(
    {
        ques: { type: String, trim: true },
        ans: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("GsecFaq", GsecFaqModel);
