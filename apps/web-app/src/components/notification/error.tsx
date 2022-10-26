import Image from 'next/image';
import { useTheme } from 'next-themes';

import ErrIcon from '../../assets/icon/error.svg';
import ErrWhiteIcon from '../../assets/icon/error-white.svg';

const ErrorNotification: React.FC<{ message: string }> = ({ message }) => {
  const { resolvedTheme: theme } = useTheme();

  if (!message) return <></>;

  return (
    <div className="bg-red-100 dark:bg-red-500 text-red-500 dark:text-white py-3 px-4 text-center rounded-lg text-sm flex mt-4">
      <div className="w-6 h-6 mr-3 ml-auto">
        <Image src={theme === 'light' ? ErrIcon : ErrWhiteIcon} alt="error" />
      </div>
      <div className="mr-auto">{message}</div>
    </div>
  );
};

export default ErrorNotification;
