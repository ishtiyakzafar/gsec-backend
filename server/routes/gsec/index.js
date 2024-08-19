import express from 'express';
import {
    addAdvantage,
    addBondDetail,
    addDatedGsec,
    addGsecDetail,
    addGsecFaq,
    addGsecsFeatureData,
    addGsecsFeatureHeading,
    addGsecsFeatureTableData,
    addGsecsType,
    addHowToInvest,
    addInvestInGsecData,
    addInvestInGsecHeading,
    addKeyFeature,
    addSdlDetail,
    addSdlType,
    addTbillDetail,
    addTbillType,
    deleteAdvantage,
    deleteBondDetail,
    deleteDatedGsec,
    deleteGsecDetail,
    deleteGsecFaq,
    deleteGsecsFeatureData,
    deleteGsecsFeatureHeading,
    deleteGsecsFeatureTableData,
    deleteGsecsType,
    deleteHowToInvest,
    deleteInvestInGsecData,
    deleteInvestInGsecHeading,
    deleteKeyFeature,
    deleteSdlDetail,
    deleteSdlType,
    deleteTbillDetail,
    deleteTbillType,
    getAdvantage,
    getBondDetail,
    getDatedGsec,
    getGsecDetail,
    getGsecFaq,
    getGsecsFeatureData,
    getGsecsFeatureHeading,
    getGsecsFeatureTableData,
    getGsecsType,
    getHowToInvest,
    getInvestInGsecData,
    getInvestInGsecHeading,
    getKeyFeature,
    getSdlDetail,
    getSdlType,
    getTbillDetail,
    getTbillType,
    updateAdvantage,
    updateBondDetail,
    updateDatedGsec,
    updateGsecDetail,
    updateGsecFaq,
    updateGsecsFeatureData,
    updateGsecsFeatureHeading,
    updateGsecsFeatureTableData,
    updateGsecsType,
    updateHowToInvest,
    updateInvestInGsecData,
    updateInvestInGsecHeading,
    updateKeyFeature,
    updateSdlDetail,
    updateSdlType,
    updateTbillDetail,
    updateTbillType,
} from "../../controller/gsec/index.js";
const router = express.Router();

// faq
router.post("/gsec/faq", addGsecFaq);
router.get("/gsec/faq", getGsecFaq);
router.delete("/gsec/faq/:id", deleteGsecFaq);
router.put("/gsec/faq/:id", updateGsecFaq);

// advantage
router.post("/gsec/advantage", addAdvantage);
router.get("/gsec/advantage", getAdvantage);
router.delete("/gsec/advantage/:id", deleteAdvantage);
router.put("/gsec/advantage/:id", updateAdvantage);

// keyfeature
router.post("/gsec/keyfeature", addKeyFeature);
router.get("/gsec/keyfeature", getKeyFeature);
router.delete("/gsec/keyfeature/:id", deleteKeyFeature);
router.put("/gsec/keyfeature/:id", updateKeyFeature);

// howtoinvest
router.post("/gsec/howtoinvest", addHowToInvest);
router.get("/gsec/howtoinvest", getHowToInvest);
router.delete("/gsec/howtoinvest/:id", deleteHowToInvest);
router.put("/gsec/howtoinvest/:id", updateHowToInvest);

// tbilltype
router.post("/gsec/tbilltype", addTbillType);
router.get("/gsec/tbilltype", getTbillType);
router.delete("/gsec/tbilltype/:id", deleteTbillType);
router.put("/gsec/tbilltype/:id", updateTbillType);

// gsecsType
router.post("/gsec/gsectype", addGsecsType);
router.get("/gsec/gsectype", getGsecsType);
router.delete("/gsec/gsectype/:id", deleteGsecsType);
router.put("/gsec/gsectype/:id", updateGsecsType);

// sdltype
router.post("/gsec/sdltype", addSdlType);
router.get("/gsec/sdltype", getSdlType);
router.delete("/gsec/sdltype/:id", deleteSdlType);
router.put("/gsec/sdltype/:id", updateSdlType);

// InvestInGsecHeading
router.post("/gsec/investingsecheading", addInvestInGsecHeading);
router.get("/gsec/investingsecheading", getInvestInGsecHeading);
router.delete("/gsec/investingsecheading/:id", deleteInvestInGsecHeading);
router.put("/gsec/investingsecheading/:id", updateInvestInGsecHeading);

// InvestInGsecData
router.post("/gsec/investInGsecData", addInvestInGsecData);
router.get("/gsec/investInGsecData", getInvestInGsecData);
router.delete("/gsec/investInGsecData/:id", deleteInvestInGsecData);
router.put("/gsec/investInGsecData/:id", updateInvestInGsecData);

// GsecsFeatureHeading
router.post("/gsec/gsecsfeatureheading", addGsecsFeatureHeading);
router.get("/gsec/gsecsfeatureheading", getGsecsFeatureHeading);
router.delete("/gsec/gsecsfeatureheading/:id", deleteGsecsFeatureHeading);
router.put("/gsec/gsecsfeatureheading/:id", updateGsecsFeatureHeading);

// GsecsFeatureTableData
router.post("/gsec/gsecsfeaturetabledata", addGsecsFeatureTableData);
router.get("/gsec/gsecsfeaturetabledata", getGsecsFeatureTableData);
router.delete("/gsec/gsecsfeaturetabledata/:id", deleteGsecsFeatureTableData);
router.put("/gsec/gsecsfeaturetabledata/:id", updateGsecsFeatureTableData);

// gsecsFeatureData
router.post("/gsec/gsecsfeaturedata", addGsecsFeatureData);
router.get("/gsec/gsecsfeaturedata", getGsecsFeatureData);
router.delete("/gsec/gsecsfeaturedata/:id", deleteGsecsFeatureData);
router.put("/gsec/gsecsfeaturedata/:id", updateGsecsFeatureData);

// BondDetail
router.post("/gsec/bonddetail", addBondDetail);
router.get("/gsec/bonddetail", getBondDetail);
router.delete("/gsec/bonddetail/:id", deleteBondDetail);
router.put("/gsec/bonddetail/:id", updateBondDetail);

// GsecDetail
router.post("/gsec/gsecdetail", addGsecDetail);
router.get("/gsec/gsecdetail", getGsecDetail);
router.delete("/gsec/gsecdetail/:id", deleteGsecDetail);
router.put("/gsec/gsecdetail/:id", updateGsecDetail);

// TbillDetail
router.post("/gsec/tbilldetail", addTbillDetail);
router.get("/gsec/tbilldetail", getTbillDetail);
router.delete("/gsec/tbilldetail/:id", deleteTbillDetail);
router.put("/gsec/tbilldetail/:id", updateTbillDetail);

// DatedGsec
router.post("/gsec/datedgsec", addDatedGsec);
router.get("/gsec/datedgsec", getDatedGsec);
router.delete("/gsec/datedgsec/:id", deleteDatedGsec);
router.put("/gsec/datedgsec/:id", updateDatedGsec);

// SdlDetail
router.post("/gsec/sdldetail", addSdlDetail);
router.get("/gsec/sdldetail", getSdlDetail);
router.delete("/gsec/sdldetail/:id", deleteSdlDetail);
router.put("/gsec/sdldetail/:id", updateSdlDetail);

export default router;