import Image from "next/image";
import WarnIcon from "../../assets/icon/warn.svg";
import MailIcon from "../../assets/mail.png";

const Verify = () => {
  return (
    <div className="max-w-lg mx-auto w-full">
      <div className="w-36 h-36 mx-auto">
        <Image src={MailIcon} alt="mail" />
      </div>
      <h1 className="font-semibold text-4xl mb-3">
        Check your email for a link
      </h1>
      <p className="text-gray-400 text-sm mb-12 font-semibold">
        We just emailed you a magic link. Click it to log in.
      </p>
      <div className="bg-gray-100 dark:bg-gray-100-dark text-gray-500 dark:text-gray-500-dark py-3 px-4 text-center rounded text-sm flex mt-3">
        <div className="w-6 h-6 mr-3 ml-auto">
          <Image src={WarnIcon} alt="warning" />
        </div>
        <div className="mr-auto">
          Can&apos;t find the link? Check your spam folder.
        </div>
      </div>
    </div>
  );
};

Verify.layout = "Auth";

export default Verify;
