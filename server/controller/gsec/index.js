import Gsec from '../../../database/models/gsec/index.js';

// Add Gsec data
export const addGsecData = async (req, res) => {
  try {
    const gsecData = new Gsec(req.body);
    const data = await gsecData.save();
    return res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

// Update Gsec data
export const updateGsecData = async (req, res) => {
  try {
    const data = await Gsec.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

// get Gsec data by id
export const getGsecData = async (req, res) => {
  try {
    const data = await Gsec.find({});
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
