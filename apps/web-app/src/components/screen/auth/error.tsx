import Image from 'next/image';
import Link from 'next/link';

import MailIcon from '../../../assets/mail-error.png';

const Error: React.FC<{ type: string }> = ({ type }) => {
  return (
    <div className="max-w-[480px] mx-auto w-full">
      <div className="w-36 h-36 mx-auto">
        <Image src={MailIcon} alt="mail" />
      </div>
      <h1 className="font-semibold text-4xl mb-3">Something went wrong 😢</h1>
      <p className="text-gray-500 dark:text-gray-500-dark sm:text-lg text-sm mb-12 font-semibold">
        {type === 'EmailSignin' ? (
          <>
            <p>We can&apos;t sent a link to your email.</p>
            <p>Please check your info and enter an existing email.</p>
          </>
        ) : (
          ''
        )}
      </p>
      <Link href={'/login'}>
        <div className="border border-[#E8E8EB] dark:border-[#444444] rounded py-3.5 cursor-pointer">
          Go back
        </div>
      </Link>
    </div>
  );
};

export default Error;
