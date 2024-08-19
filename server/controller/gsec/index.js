import GsecFaq from '../../../database/models/gsec/faq.js';
import Advantage from '../../../database/models/gsec/advantages.js';
import KeyFeature from '../../../database/models/gsec/keyFeature.js';
import HowToInvest from '../../../database/models/gsec/howToInvest.js';
import TbillType from '../../../database/models/gsec/tbillTypes.js';
import GsecsType from '../../../database/models/gsec/gsecsTypes.js';
import SdlType from '../../../database/models/gsec/sdlTypes.js';
import InvestInGsecHeading from '../../../database/models/gsec/investInGsecHeading.js';
import InvestInGsecData from '../../../database/models/gsec/investInGsecData.js';
import GsecsFeatureHeading from '../../../database/models/gsec/gsecsFeatureHeading.js';
import GsecsFeatureTableData from '../../../database/models/gsec/gsecsFeatureTableData.js';
import GsecsFeatureData from '../../../database/models/gsec/gsecsFeatureData.js';
import BondDetail from '../../../database/models/gsec/bondDetail.js';
import GsecDetail from '../../../database/models/gsec/gsecDetail.js';
import TbillDetail from '../../../database/models/gsec/tbillDetail.js';
import DatedGsec from '../../../database/models/gsec/datedGsec.js';
import SdlDetail from '../../../database/models/gsec/sdlDetail.js';


// =======================FAQ==================
export const addGsecFaq = async (req, res) => {
  try {
    const gsecFaq = new GsecFaq(req.body);
    const data = await gsecFaq.save();
    return res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const getGsecFaq = async (req, res) => {
  try {
    const data = await GsecFaq.find({});
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const deleteGsecFaq = async (req, res) => {
  try {
    const data = await GsecFaq.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const updateGsecFaq = async (req, res) => {
  try {
    const data = await GsecFaq.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

// =======================advantage==================
export const addAdvantage = async (req, res) => {
  try {
    const advantage = new Advantage(req.body);
    const data = await advantage.save();
    return res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const getAdvantage = async (req, res) => {
  try {
    const data = await Advantage.find({});
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const deleteAdvantage = async (req, res) => {
  try {
    const data = await Advantage.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const updateAdvantage = async (req, res) => {
  try {
    const data = await Advantage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

// =======================KeyFeature==================
export const addKeyFeature = async (req, res) => {
  try {
    const keyFeature = new KeyFeature(req.body);
    const data = await keyFeature.save();
    return res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const getKeyFeature = async (req, res) => {
  try {
    const data = await KeyFeature.find({});
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const deleteKeyFeature = async (req, res) => {
  try {
    const data = await KeyFeature.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const updateKeyFeature = async (req, res) => {
  try {
    const data = await KeyFeature.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

// =======================howtoinvest==================
export const addHowToInvest = async (req, res) => {
  try {
    const howToInvest = new HowToInvest(req.body);
    const data = await howToInvest.save();
    return res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const getHowToInvest = async (req, res) => {
  try {
    const data = await HowToInvest.find({});
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const deleteHowToInvest = async (req, res) => {
  try {
    const data = await HowToInvest.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const updateHowToInvest = async (req, res) => {
  try {
    const data = await HowToInvest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

// =======================TbillType==================
export const addTbillType = async (req, res) => {
  try {
    const saveData = new TbillType(req.body);
    const data = await saveData.save();
    return res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const getTbillType = async (req, res) => {
  try {
    const data = await TbillType.find({});
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const deleteTbillType = async (req, res) => {
  try {
    const data = await TbillType.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const updateTbillType = async (req, res) => {
  try {
    const data = await TbillType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

// =======================GsecsType==================
export const addGsecsType = async (req, res) => {
  try {
    const gsecsType = new GsecsType(req.body);
    const data = await gsecsType.save();
    return res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const getGsecsType = async (req, res) => {
  try {
    const data = await GsecsType.find({});
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const deleteGsecsType = async (req, res) => {
  try {
    const data = await GsecsType.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const updateGsecsType = async (req, res) => {
  try {
    const data = await GsecsType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

// =======================SdlType==================
export const addSdlType = async (req, res) => {
  try {
    const saveData = new SdlType(req.body);
    const data = await saveData.save();
    return res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const getSdlType = async (req, res) => {
  try {
    const data = await SdlType.find({});
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const deleteSdlType = async (req, res) => {
  try {
    const data = await SdlType.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const updateSdlType = async (req, res) => {
  try {
    const data = await SdlType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

// =======================InvestInGsecHeading==================
export const addInvestInGsecHeading = async (req, res) => {
  try {
    const dataExist = await InvestInGsecHeading.find({});
    if (dataExist.length > 0) {
      return res.status(401).json({ message: 'Data already exist' });
    } else {
      const saveData = new InvestInGsecHeading(req.body);
      const data = await saveData.save();
      return res.status(201).json(data);
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const getInvestInGsecHeading = async (req, res) => {
  try {
    const data = await InvestInGsecHeading.find({});
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const deleteInvestInGsecHeading = async (req, res) => {
  try {
    const data = await InvestInGsecHeading.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const updateInvestInGsecHeading = async (req, res) => {
  try {
    const data = await InvestInGsecHeading.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

// =======================InvestInGsecData==================
export const addInvestInGsecData = async (req, res) => {
  try {
    const investInGsecData = new InvestInGsecData(req.body);
    const data = await investInGsecData.save();
    return res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const getInvestInGsecData = async (req, res) => {
  try {
    const data = await InvestInGsecData.find({});
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const deleteInvestInGsecData = async (req, res) => {
  try {
    const data = await InvestInGsecData.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const updateInvestInGsecData = async (req, res) => {
  try {
    const data = await InvestInGsecData.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

// =======================GsecsFeatureHeading==================
export const addGsecsFeatureHeading = async (req, res) => {
  try {
    const dataExist = await GsecsFeatureHeading.find({});
    if (dataExist.length > 0) {
      return res.status(401).json({ message: 'Data already exist' });
    } else {
      const saveData = new GsecsFeatureHeading(req.body);
      const data = await saveData.save();
      return res.status(201).json(data);
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const getGsecsFeatureHeading = async (req, res) => {
  try {
    const data = await GsecsFeatureHeading.find({});
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const deleteGsecsFeatureHeading = async (req, res) => {
  try {
    const data = await GsecsFeatureHeading.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const updateGsecsFeatureHeading = async (req, res) => {
  try {
    const data = await GsecsFeatureHeading.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

// =======================GsecsFeatureTableData==================
export const addGsecsFeatureTableData = async (req, res) => {
  try {
    const saveData = new GsecsFeatureTableData(req.body);
    const data = await saveData.save();
    return res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const getGsecsFeatureTableData = async (req, res) => {
  try {
    const data = await GsecsFeatureTableData.find({});
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const deleteGsecsFeatureTableData = async (req, res) => {
  try {
    const data = await GsecsFeatureTableData.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const updateGsecsFeatureTableData = async (req, res) => {
  try {
    const data = await GsecsFeatureTableData.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

// =======================GsecsFeatureData==================
export const addGsecsFeatureData = async (req, res) => {
  try {
    const saveData = new GsecsFeatureData(req.body);
    const data = await saveData.save();
    return res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const getGsecsFeatureData = async (req, res) => {
  try {
    const data = await GsecsFeatureData.find({});
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const deleteGsecsFeatureData = async (req, res) => {
  try {
    const data = await GsecsFeatureData.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const updateGsecsFeatureData = async (req, res) => {
  try {
    const data = await GsecsFeatureData.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

// =======================BondDetail==================
export const addBondDetail = async (req, res) => {
  try {
    const dataExist = await BondDetail.find({});
    if (dataExist.length > 0) {
      return res.status(401).json({ message: 'Data already exist' });
    } else {
      const saveData = new BondDetail(req.body);
      const data = await saveData.save();
      return res.status(201).json(data);
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const getBondDetail = async (req, res) => {
  try {
    const data = await BondDetail.find({});
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const deleteBondDetail = async (req, res) => {
  try {
    const data = await BondDetail.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const updateBondDetail = async (req, res) => {
  try {
    const data = await BondDetail.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

// =======================GsecDetail==================
export const addGsecDetail = async (req, res) => {
  try {
    const dataExist = await GsecDetail.find({});
    if (dataExist.length > 0) {
      return res.status(401).json({ message: 'Data already exist' });
    } else {
      const saveData = new GsecDetail(req.body);
      const data = await saveData.save();
      return res.status(201).json(data);
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const getGsecDetail = async (req, res) => {
  try {
    const data = await GsecDetail.find({});
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const deleteGsecDetail = async (req, res) => {
  try {
    const data = await GsecDetail.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const updateGsecDetail = async (req, res) => {
  try {
    const data = await GsecDetail.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

// =======================TbillDetail==================
export const addTbillDetail = async (req, res) => {
  try {
    const dataExist = await TbillDetail.find({});
    if (dataExist.length > 0) {
      return res.status(401).json({ message: 'Data already exist' });
    } else {
      const saveData = new TbillDetail(req.body);
      const data = await saveData.save();
      return res.status(201).json(data);
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const getTbillDetail = async (req, res) => {
  try {
    const data = await TbillDetail.find({});
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const deleteTbillDetail = async (req, res) => {
  try {
    const data = await TbillDetail.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const updateTbillDetail = async (req, res) => {
  try {
    const data = await TbillDetail.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

// =======================DatedGsec==================
export const addDatedGsec = async (req, res) => {
  try {
    const dataExist = await DatedGsec.find({});
    if (dataExist.length > 0) {
      return res.status(401).json({ message: 'Data already exist' });
    } else {
      const saveData = new DatedGsec(req.body);
      const data = await saveData.save();
      return res.status(201).json(data);
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const getDatedGsec = async (req, res) => {
  try {
    const data = await DatedGsec.find({});
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const deleteDatedGsec = async (req, res) => {
  try {
    const data = await DatedGsec.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const updateDatedGsec = async (req, res) => {
  try {
    const data = await DatedGsec.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

// =======================SdlDetail==================
export const addSdlDetail = async (req, res) => {
  try {
    const dataExist = await SdlDetail.find({});
    if (dataExist.length > 0) {
      return res.status(401).json({ message: 'Data already exist' });
    } else {
      const saveData = new SdlDetail(req.body);
      const data = await saveData.save();
      return res.status(201).json(data);
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const getSdlDetail = async (req, res) => {
  try {
    const data = await SdlDetail.find({});
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const deleteSdlDetail = async (req, res) => {
  try {
    const data = await SdlDetail.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};
export const updateSdlDetail = async (req, res) => {
  try {
    const data = await SdlDetail.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};


