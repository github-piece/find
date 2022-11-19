import Link from 'next/link';
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Navbar = () => {
  const { resolvedTheme: theme } = useTheme();
  const isWaitlist = process.env.waitlist && process.env.waitlist !== 'false';

  if (isWaitlist === false)
    return (
      <nav className={classNames('flex justify-around relative h-12 w-full pt-10 pb-20 sticky top-0 z-50 bg-white dark:bg-[#262626]', theme)}>
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
        <Link href='https://find.new/login' className="flex">
          <button
            className="bg-gray-700 dark:bg-gray-200-dark hover:bg-gray-400 text-white dark:text-gray-700-dark font-semibold px-4 py-2.5 rounded-xl my-auto"
          >
            Log in
          </button>
        </Link>
      </nav>
    );
  else
    return (
      <nav className={classNames('relative top-5 lg:top-8', theme)}>
        <div className="flex lg:justify-center cursor-pointer ml-5">
          <Link href={'/'}>
            <Image src='/find-logo.svg' width={96} height={40} alt="logo"/>
          </Link>
        </div>
        <Link href='https://find.new/login' className="flex justify-end -mt-10 mr-5 lg:mr-8">
          <button
            className="bg-white dark:bg-gray-200-dark hover:bg-gray-400 dark:hover:bg-gray-600 dark:text-gray-700-dark font-semibold px-4 py-2.5 rounded-xl my-auto"
          >
            Log in
          </button>
        </Link>
      </nav>
    );
};

export default Navbar;
