import Image from "next/image"
import WarnIcon from "../assets/icon/warn.svg"
import WindowIcon from "../assets/window.png"

const Submission = () => {
  return (
    <>
      <div className="w-36 h-36 mx-auto">
        <Image src={WindowIcon} alt="window" />
      </div>
      <h1 className="font-semibold text-4xl mb-3">
        Thank you for your interest!
      </h1>
      <p className="text-gray-400 text-sm mb-12 font-semibold">
        We&apos;re inviting new members to Find every week. We&apos;ll send you an email as soon as Find is ready for you.
      </p>
      <div className="bg-gray-100 dark:bg-dark text-gray-500 py-3 px-4 text-center rounded text-sm flex mt-3">
        <div className="w-6 h-6 mr-3 ml-auto">
          <Image src={WarnIcon} alt="warn" />
        </div>
        <div className="mr-auto">
          The Find waitlist is growing fast, so there may be many folks ahead of you.
        </div>
      </div>
    </>
  )
}

Submission.layout = 'Auth'

export default Submission