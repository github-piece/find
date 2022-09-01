import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeSelectButton from './ThemeSelectButton';
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const isWaitlist = process.env.waitlist && process.env.waitlist !== 'false';
  let auth = 'Join';
  if (['/join', '/waitlist'].includes(router.pathname)) auth = 'Log in';

  const handleAuth = () => {
    router.push(auth === 'Join' ? (isWaitlist ? '/waitlist' : '/join') : '/login');
  };

  return (
    <nav className={classNames('p-5 flex justify-between relative', theme)}>
      <Link href={'/'}>
        <div className="flex cursor-pointer sm:hidden block">
          <Image src="/logo.svg" width={32} height={32} alt="logo" />
        </div>
      </Link>
      <div className="flex ml-auto sm:ml-0 my-auto">
        <Link href={'https://findlabs.org'}>
          <div className="mr-4 cursor-pointer dark:text-gray-100">Learn more</div>
        </Link>
        <Link href={'https://findlabs.org/docs'}>
          <div className="mr-4 cursor-pointer dark:text-gray-100">Help</div>
        </Link>
      </div>
      <Link href={'/'}>
        <div className="flex cursor-pointer sm:flex hidden absolute left-1/2 translate-x-[-50%] mt-[-6px]">
          <Image
            src={theme === 'dark' ? '/find-logo-white.svg' : '/find-logo.svg'}
            width={96}
            height={40}
            alt="logo"
          />
        </div>
      </Link>
      <div className="flex">
        <div className="text-sm text-gray-500 dark:text-gray-500-dark my-auto mr-4 sm:block hidden">
          {auth === 'Join' ? "Don't have an account?" : 'Already have an account?'}
        </div>
        <button
          onClick={handleAuth}
          className="bg-gray-100 dark:bg-gray-100-dark hover:bg-gray-400 text-gray-700 dark:text-gray-700-dark text-sm font-bold py-1 px-3 rounded"
        >
          {auth}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
