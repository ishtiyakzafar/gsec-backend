import express from 'express';
import { createOrder } from '../../controller/razorpay/index.js';
const bannerRouter = express.Router();

bannerRouter.post('/razorpay/order', createOrder);
// bannerRouter.post('/razorpay/capture/:paymentId', capturePayment);

export default bannerRouter;
