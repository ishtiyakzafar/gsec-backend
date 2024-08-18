import Razorpay from 'razorpay';

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


export function createOrder(req, res) {
  try {
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: "receipt#1",
      payment_capture: 1, // 1 for automatic capture // 0 for manual capture
    };

    instance.orders.create(options, async function (err, order) {
      if (err) {
        return res.status(400).json(err);
      }
      return res.status(200).json(order);
    });
  } catch (err) {
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};

// export async function capturePayment(req, res) {
//   try {
//     const payment = await instance.payments.capture(req.params.paymentId, 10 * 100);
//     return res.status(200).json(payment);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// };