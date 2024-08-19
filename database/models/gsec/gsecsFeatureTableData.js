import mongoose from "../../connnect.js";

const gsecsFeatureTableDataModel = new mongoose.Schema(
    {
        title: { type: String, trim: true },
        description: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("GsecsFeatureTableData", gsecsFeatureTableDataModel);
