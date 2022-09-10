import { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '../../../utils/stripe';

async function subscribeHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, plan } = req.body;
    const customer = await stripe.customers.create({
      email,
    });
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ plan }],
      payment_behavior: 'default_incomplete',
      expand: ['latest_invoice.payment_intent'],
    });

    if (!subscription) {
      res.status(400).json({
        success: false,
        error: 'Subscription error!',
      });
      return;
    }

    res.status(200).json({
      success: true,
      client: (subscription?.latest_invoice as any)?.payment_intent.client_secret,
    });
  } catch (e) {
    res.status(400).json({ error: e });
  }
}

export default subscribeHandler;
