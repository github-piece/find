import {
  useStripe,
  useElements,
  CardExpiryElement,
  CardCvcElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { FormEvent, useState } from 'react';
import Button from './Button';
import Label from './radix/Label';

const CheckoutForm: React.FC<{ plan: string }> = ({ plan }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage('');
    const cardNumberElement = elements?.getElement('cardNumber');

    if (!stripe || !cardNumberElement) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardNumberElement!,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    const { data: subscription }: any = await axios.post('/api/stripe/subscribe', {
      plan,
      email: 'blabla@mail.com',
    });
    console.log('subscription', subscription);
    if (!subscription?.client) {
      setMessage(subscription.error);
      return;
    }
    console.log({ subscription, paymentMethod });
    const stripePayload = await stripe.confirmCardPayment(subscription.client, {
      payment_method: paymentMethod.id,
    });

    console.log('stripePayload', stripePayload);
    if (stripePayload.error) {
      setMessage(stripePayload.error.message);
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
      <div className="col-span-2">
        <Label text="Card Number" />
        <CardNumberElement className="bg-transparent border border-solid  border-[#e8e8eb] dark:border-[#2c2c2c] rounded min-h-[42px] p-4" />
      </div>
      <div className="col-span-1">
        <Label text="Expiry date" />
        <CardExpiryElement className="bg-transparent border border-solid  border-[#e8e8eb] dark:border-[#2c2c2c] rounded min-h-[42px] p-4" />
      </div>
      <div className="col-span-1">
        <Label text="CVV" />
        <CardCvcElement className="bg-transparent border border-solid  border-[#e8e8eb] dark:border-[#2c2c2c] rounded min-h-[42px] p-4" />
      </div>
      <Button
        type="submit"
        text="Confirm and pay"
        solid
        full
        primary
        className="mx-0 col-span-2"
        disabled={isLoading || !stripe || !elements}
      />
      <div className="text-red-500 col-span-2 text-center">{message}</div>
    </form>
  );
};

export default CheckoutForm;
