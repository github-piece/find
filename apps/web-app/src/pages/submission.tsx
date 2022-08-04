import Image from "next/image"
import WarnIcon from "../assets/icon/warn.svg"
import WindowIcon from "../assets/window.png"

const Submission = () => {
  return (
    <>
      <div className="w-36 h-36 mx-auto">
        <Image src={WindowIcon} />
      </div>
      <h1 className="font-semibold text-4xl mb-3">
        Thank you for your submission
      </h1>
      <p className="text-gray-400 text-sm mb-12 font-semibold">
        We'll send you an email as soon as you have a chance to register
      </p>
      <div className="bg-gray-200 text-gray-500 py-3 px-4 text-center rounded text-sm flex mt-3">
        <div className="w-6 h-6 mr-3 ml-auto">
          <Image src={WarnIcon} />
        </div>
        <div className="mr-auto">
          Can't find your link? Check your spam folder!
        </div>
      </div>
    </>
  )
}

Submission.layout = 'Auth'

export default Submission