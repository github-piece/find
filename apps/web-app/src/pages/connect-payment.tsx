import Image from "next/image"
import Button from "../components/Button"
import KeyIcon from "../assets/icon/key.svg"

const ConnectPayment = () => {
  const handleSubmit = () => {}
  return (
    <>
      <h1 className="font-semibold text-4xl mb-0">
        Start your journey
      </h1>
      <div className="font-semibold text-4xl mb-3 text-gray-700">
        for $5 a month
      </div>
      <p className="text-gray-400 text-sm mb-12 font-semibold">
        Your Find subscription will renew automatically every month for $5. You can cancel your subscription any time.
      </p>
      <div className="grid grid-cols-2 space gap-6">
        <div>
          <h2 className="font-semibold text-lg mb-3">What you get</h2>
          <ul className="bg-gray-200 rounded-sm p-4">
            <li>Sed posuere liqula a nulla sagittis, et consectetur.</li>
            <li>Arci varius natoque penatibus et magnis dis.</li>
            <li>Nam pretium rutrum venenatis.</li>
            <li>Mauris rhoncus risus ex, in ultricies libero varius.</li>
            <li>Suspendisse at lorem lobortis, tempor elit nec.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Card number</h3>
          <Button
            type="submit"
            text="Confirm and pay"
            solid
            full
            className="mx-0"
            onClick={handleSubmit}
          />
          <div className="bg-gray-200 text-gray-500 py-3 px-4 text-center rounded text-sm flex mt-3">
            <div className="w-6 h-6 mr-3 ml-auto">
              <Image src={KeyIcon} alt="secret" />
            </div>
            <div className="mr-auto">We&apos;ll email you a magic link for log in.</div>
          </div>
        </div>
      </div>
    </>
  )
}

ConnectPayment.layout = 'Auth'

export default ConnectPayment