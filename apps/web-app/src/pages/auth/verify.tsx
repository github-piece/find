import Image from "next/image"
import WarnIcon from "../../assets/icon/warn.svg"
import MailIcon from "../../assets/mail.png"

const Verify = () => {
  return (
    <>
      <div className="w-36 h-36 mx-auto">
        <Image src={MailIcon} alt="mail" />
      </div>
      <h1 className="font-semibold text-4xl mb-3">
        Check your email for a link
      </h1>
      <p className="text-gray-400 text-sm mb-12 font-semibold">
        We&apos;ll email you a magic link for log in
      </p>
      <div className="bg-gray-200 text-gray-500 py-3 px-4 text-center rounded text-sm flex mt-3">
        <div className="w-6 h-6 mr-3 ml-auto">
          <Image src={WarnIcon} alt="warning" />
        </div>
        <div className="mr-auto">
          Can&apos;t find your link? Check your spam folder!
        </div>
      </div>
    </>
  )
}

Verify.layout = 'Auth'

export default Verify