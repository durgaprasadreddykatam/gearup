import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookEventTypes = [
    'payment_intent.succeeded',
    'payment_intent.payment_failed',
    'charge.refunded',
    // Add any other event types that you want to listen for
  ];
  export default async function handler(req, res) {
    const sig = req.headers['stripe-signature'];
    let event;
  
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      console.error(err);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
  
    if (!webhookEventTypes.includes(event.type)) {
      return res.status(400).send(`Unexpected event type: ${event.type}`);
    }
  
    try {
      // Handle the webhook event
      switch (event.type) {
        case 'payment_intent.succeeded':
          // Update your database with the payment intent data
          break;
        case 'payment_intent.payment_failed':
          // Handle the payment failure
          break;
        case 'charge.refunded':
          // Handle the charge refund
          break;
        // Add any other event types that you want to handle
      }
  
      res.json({ received: true });
    } catch (err) {
      console.error(err);
      res.status(500).send(`Server error: ${err.message}`);
    }
  }
    

// import Stripe from 'stripe';
// import { buffer } from 'micro';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: '2020-08-27',
// });

// const webhookSecret = process.env.WEBHOOK_SECRET_KEY;
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
// const handler = async (req, res) => {
//   const buf = await buffer(req);
//   const sig = req.headers['stripe-signature'];

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
//   } catch (err) {
//     res.status(400).send(`Webhook Error: ${err.message}`);
//     console.log(`Webhook Error: ${err.message}`);
//     return;
//   }
//   const data = JSON.parse(buf);

//   switch (event.type) {
//     case 'payment_intent.created':
//       const paymentIntent = event.data.object;
//       console.log(`PaymentIntent was created for: ${data.data.object.amount}`);
//       break;
//     case 'payment_intent.succeeded,':
//       const paymentMethod = event.data.object;
//       console.log(
//         `PaymentIntent was successfull for: ${data.data.object.amount}`
//       );
//       break;
//     // ... handle other event types
//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }
//   res.json({ received: true });
// };
// export default handler;

// 2nd Method

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// export default async (req, res) => {
//   const sig = req.headers['stripe-signature'];

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
//   } catch (err) {
//     console.log(`Webhook Error: ${err.message}`);
//     return res.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   // Handle the event
//   switch (event.type) {
//     case 'payment_intent.succeeded':
//       const paymentIntentSucceeded = event.data.object;
//       // Then define and call a function to handle the event payment_intent.succeeded
//       break;
//     // ... handle other event types
//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }

//   // Return a 200 response to acknowledge receipt of the event
//   res.json({ received: true });
// };
