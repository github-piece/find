import Image from 'next/image';
import { useTheme } from 'next-themes';

import WarnIcon from '../assets/icon/warn.svg';

const Submission = () => {
  const { resolvedTheme: theme } = useTheme();
  return (
    <div className="max-w-[640px] mx-auto w-full">
      <div className={theme}>
        <div className="w-36 h-36 mx-auto">
          <Image
            src={theme === 'light' ? '/assets/window.svg' : '/assets/window-dark.svg'}
            width={106}
            height={80}
            alt="window"
          />
        </div>
        <h1 className="font-semibold text-4xl mb-3">Thank you for your interest!</h1>
        <p className="text-gray-500 dark:text-gray-500-dark sm:text-base text-sm mb-12 max-w-[480px] mx-auto">
          We&apos;re inviting new members to Find every week. We&apos;ll send you an email as soon as
          Find is ready for you.
        </p>
        <div className="bg-gray-100 dark:bg-gray-100-dark text-gray-500 dark:text-gray-500-dark py-3.5 px-4 text-center rounded-lg text-sm flex mt-3">
          <div className="w-6 h-6 mr-3 ml-auto">
            <Image src={WarnIcon} alt="warn" />
          </div>
          <div className="mr-auto">
            The Find waitlist is growing fast, so there may be many folks ahead of you.
          </div>
        </div>
      </div>
    </div>
  );
};

Submission.layout = 'Auth';

export default Submission;
