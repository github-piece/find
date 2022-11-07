import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Footer = () => {
  const { resolvedTheme: theme } = useTheme();

  return (
    <div className="mt-40 mb-20 max-w-[1368px] mx-auto">
      <div className="flex justify-between">
        <div className="text-3xl">
          <Link href="/">
            <span className="cursor-pointer mx-4">Mission</span>
          </Link>
          <Link href="/">
            <span className="cursor-pointer mx-4">Product</span>
          </Link>
          <Link href="/">
            <span className="cursor-pointer mx-4">Docs</span>
          </Link>
          <Link href="/">
            <span className="cursor-pointer mx-4">Join ✌️</span>
          </Link>
        </div>
        <div className="text-lg">
          <Link href="/">
            <span className="cursor-pointer mx-4">Careers</span>
          </Link>
          <Link href="/">
            <span className="cursor-pointer mx-4">Login</span>
          </Link>
          <Link href="/">
            <span className="cursor-pointer mx-4">Privacy</span>
          </Link>
          <Link href="/">
            <span className="cursor-pointer mx-4">Terms of Use</span>
          </Link>
        </div>
      </div>
      <div className="flex justify-between mt-20">
        <div className="flex flex-row gap-x-10">
          <Link href={'https://github.com'}>
            <Image
              src={theme === 'light' ? '/assets/github-light.svg' : '/assets/github-dark.svg'}
              width={24}
              height={24}
              alt='Github'
              className='cursor-pointer'
            />
          </Link>
          <Link href={'https://discord.com'}>
            <Image
              src={theme === 'light' ? '/assets/discord-light.svg' : '/assets/discord-dark.svg'}
              width={24}
              height={24}
              alt='Discord'
              className='cursor-pointer'
            />
          </Link>
          <Link href={'https://twitter.com'}>
            <Image
              src={theme === 'light' ? '/assets/twitter-light.svg' : '/assets/twitter-dark.svg'}
              width={24}
              height={24}
              alt='Twitter'
              className='cursor-pointer'
            />
          </Link>
        </div>
        <Link href={'/'}>
          <div className="flex cursor-pointer sm:flex hidden">
            <Image
              src={theme === 'light' ? '/findlabs-logo-black.svg' : '/findlabs-logo-white.svg'}
              width={155}
              height={40}
              alt="logo"
            />
          </div>
        </Link>
        <div className="text-lg">
          © 2022 Find Labs Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
