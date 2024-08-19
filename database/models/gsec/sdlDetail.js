import mongoose from "../../connnect.js";

const sdlDetailModel = new mongoose.Schema(
    {
        description: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("SdlDetail", sdlDetailModel);
