import mongoose from "../../connnect.js";

const sdlTypesModel = new mongoose.Schema(
    {
        description: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("SdlTypes", sdlTypesModel);
