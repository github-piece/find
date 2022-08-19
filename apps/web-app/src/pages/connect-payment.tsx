import Image from "next/image"
import LockIcon from "../assets/icon/lock.svg"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm"






const ConnectPayment = () => {
  if (!process.env.STRIPE_PUBLIC_KEY) return <></>

  const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);
  
  return (
    <div className="lg:max-w-4xl max-w-xl mx-auto w-full px-4">
      <h1 className="font-semibold text-4xl mb-0">
        Start your journey
      </h1>
      <div className="font-semibold text-4xl mb-3 text-gray-500">
        for $5 a month
      </div>
      <p className="text-gray-400 text-sm mb-12 font-semibold max-w-lg mx-auto">
        Your Find subscription will renew automatically every month for $5. You can cancel your subscription any time.
      </p>
      <div className="grid lg:grid-cols-2 space gap-6 text-left">
        <div>
          <h2 className="font-semibold text-lg mb-3">What you get</h2>
          <ul className="bg-gray-100 p-5 rounded list-disc">
            <li className="flex my-3 text-gray-500"><div className="w-4 h-4 rounded-full bg-gray-400 my-auto mr-2" />Sed posuere liqula a nulla sagittis, et consectetur.</li>
            <li className="flex my-3 text-gray-500"><div className="w-4 h-4 rounded-full bg-gray-400 my-auto mr-2" />Arci varius natoque penatibus et magnis dis.</li>
            <li className="flex my-3 text-gray-500"><div className="w-4 h-4 rounded-full bg-gray-400 my-auto mr-2" />Nam pretium rutrum venenatis.</li>
            <li className="flex my-3 text-gray-500"><div className="w-4 h-4 rounded-full bg-gray-400 my-auto mr-2" />Mauris rhoncus risus ex, in ultricies libero varius.</li>
            <li className="flex my-3 text-gray-500"><div className="w-4 h-4 rounded-full bg-gray-400 my-auto mr-2" />Suspendisse at lorem lobortis, tempor elit nec.</li>
          </ul>
        </div>
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
          <div className="bg-gray-200 text-gray-500 py-3 px-4 text-center rounded text-sm flex mt-3 px-3">
            <div className="w-6 h-6 mr-2">
              <Image src={LockIcon} alt="secret" />
            </div>
            <div>
              We use Stripe for payments and never see or save your card details ourselves.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ConnectPayment.layout = 'Auth'

export default ConnectPayment