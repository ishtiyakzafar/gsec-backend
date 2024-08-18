import mongoose from "../../connnect.js";

const gsecModel = new mongoose.Schema(
  {
    bond_details: { type: String, trim: true },
    government_securities: { type: String, trim: true },
    treasury_bills: { type: String, trim: true },
    dated_gsecs: { type: String, trim: true },
    state_development_loans: { type: String, trim: true },
    gsecs_features: {
      headingData: { type: String, trim: true },
      tableData: [
        {
          title: { type: String, trim: true },
          description: { type: String, trim: true },
        },
      ],
      paragraphData: [
        {
          description: { type: String, trim: true },
        },
      ],
    },
    invest_in_gsecs: {
      headingData: { type: String, trim: true },
      data: [
        {
          list: { type: String, trim: true },
        },
      ],
    },
    key_features: [
      {
        list: { type: String, trim: true },
      },
    ],
    advantages: [
      {
        list: { type: String, trim: true },
      },
    ],
    gsecs_types: [
      {
        icon: { type: String, trim: true },
        title: { type: String, trim: true },
        description: { type: String, trim: true },
      },
    ],
    how_to_invest: [
      {
        title: { type: String, trim: true },
        description: { type: String, trim: true },
      },
    ],
    faq: [
      {
        ques: { type: String, trim: true },
        ans: { type: String, trim: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Gsec", gsecModel);
