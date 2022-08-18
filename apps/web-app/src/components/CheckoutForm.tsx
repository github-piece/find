import {
  useStripe,
  useElements,
  CardExpiryElement,
  CardCvcElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import classNames from "classnames";
import { useState } from "react";
import Button from "./Button";
import { inputBaseClass } from "./radix/Input";
import Label from "./radix/Label";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
      <div className="col-span-2">
        <Label text="Card Number" />
        <CardNumberElement className={classNames(inputBaseClass)} />
      </div>
      <div className="col-span-1">
        <Label text="Expiry date" />
        <CardExpiryElement className={classNames(inputBaseClass)} />
      </div>
      <div className="col-span-1">
        <Label text="CVV" />
        <CardCvcElement className={classNames(inputBaseClass)} />
      </div>
      <Button
        type="submit"
        text="Confirm and pay"
        solid
        full
        className="mx-0 col-span-2"
        disabled={isLoading || !stripe || !elements}
      />
    </form>
  );
}

export default CheckoutForm