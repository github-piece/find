import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const { resolvedTheme: theme } = useTheme();
  const isWaitlist = process.env.waitlist && process.env.waitlist !== 'false';
  let auth = 'Log in';
  if (['/join', '/waitlist'].includes(router.pathname)) auth = 'Log in';

  const handleAuth = () => {
    router.push(auth === 'Join' ? (isWaitlist ? '/waitlist' : '/join') : '/login');
  };

  if (process.env.NEXT_PUBLIC_IS_WAITLIST == 'false')
    return (
      <nav className={classNames('flex justify-between max-w-[1368px] mx-auto relative h-12 w-full mt-4', theme)}>
        <Link href={'/'}>
          <div className="flex cursor-pointer sm:flex hidden">
            <Image
              src={theme === 'light' ? '/find-logo-black.svg' : '/find-logo-white.svg'}
              width={96}
              height={40}
              alt="logo"
            />
          </div>
        </Link>
        <div className="flex ml-auto sm:ml-0 my-auto">
          <Link href={'https://findlabs.org'}>
            <div className="mr-10 cursor-pointer dark:text-gray-100">Mission</div>
          </Link>
          <Link href={'https://findlabs.org/docs'}>
            <div className="mr-10 cursor-pointer dark:text-gray-100">Product</div>
          </Link>
          <Link href={'https://findlabs.org/docs'}>
            <div className="cursor-pointer dark:text-gray-100">Docs</div>
          </Link>
        </div>
        <div className="flex">
          <button
            onClick={handleAuth}
            className="bg-gray-700 dark:bg-gray-200-dark hover:bg-gray-400 text-white dark:text-gray-700-dark font-semibold px-4 py-2.5 rounded-xl my-auto"
          >
            {auth}
          </button>
        </div>
      </nav>
    );
  else
    return (
      <nav className={classNames('relative top-12', theme)}>
        <div className="flex justify-center cursor-pointer sm:flex hidden">
          <Link href={'/'}>
            <Image src='/find-logo.svg' width={96} height={40} alt="logo"/>
          </Link>
        </div>
        <Link href='https://find.new/login' className="flex justify-end -mt-10 mr-16">
          <button
            className="bg-white dark:bg-gray-200-dark hover:bg-gray-400 dark:text-gray-700-dark font-semibold px-4 py-2.5 rounded-xl my-auto"
          >
            {auth}
          </button>
        </Link>
      </nav>
    );
};

export default Navbar;
