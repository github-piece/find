import Image from 'next/image';

import WarnIcon from '../../assets/icon/warn.svg';
import MailIcon from '../../assets/mail.png';

const Verify = () => {
  return (
    <div className="max-w-[480px] mx-auto w-full">
      <div className="w-36 h-36 mx-auto">
        <Image src={MailIcon} alt="mail" />
      </div>
      <h1 className="font-semibold text-4xl mb-3">Check your email for a link</h1>
      <p className="text-gray-500 dark:text-gray-500-dark sm:text-lg text-sm mb-12">
        We&apos;ll email you a magic link to confirm your email.
      </p>
      <div className="bg-gray-100 dark:bg-gray-100-dark text-gray-500 dark:text-gray-500-dark py-3.5 px-4 text-center rounded-lg text-sm flex mt-3">
        <div className="w-6 h-6 mr-3 ml-auto">
          <Image src={WarnIcon} alt="warning" />
        </div>
        <div className="mr-auto">Can&apos;t find the link? Check your spam folder.</div>
      </div>
    </div>
  );
};

Verify.layout = 'Auth';

export default Verify;
