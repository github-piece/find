import Image from 'next/image';
import { useRouter } from 'next/router';
import WarnIcon from '../../assets/icon/warn.svg';
import MailIcon from '../../assets/mail-error.png';

const Error = () => {
  const router = useRouter();
  const { error } = router.query;
  return (
    <div className="max-w-[480px] mx-auto w-full">
      <div className="w-36 h-36 mx-auto">
        <Image src={MailIcon} alt="mail" />
      </div>
      <h1 className="font-semibold text-4xl mb-3">Something went wrong</h1>
      <p className="text-gray-400 sm:text-lg text-sm mb-12 font-semibold">
        {error === 'EmailSignin' ? (
          <>
            We can&apos;t sent a linkt to <span className="text-black"></span>
          </>
        ) : (
          ''
        )}
      </p>
      <div className="bg-gray-100 dark:bg-gray-100-dark text-gray-500 dark:text-gray-500-dark py-3 px-4 text-center rounded text-sm flex mt-3">
        <div className="w-6 h-6 mr-3 ml-auto">
          <Image src={WarnIcon} alt="warning" />
        </div>
        <div className="mr-auto">Can&apos;t find the link? Check your spam folder.</div>
      </div>
    </div>
  );
};

Error.layout = 'Auth';

export default Error;
