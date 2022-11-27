import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Footer = () => {
  const { resolvedTheme: theme } = useTheme();

  return (
    <div className='mt-40 mx-10 bg-[#f8f9fd] dark:bg-[#2c2c2c] rounded-2xl py-20 px-5 sm:px-20 lg:px-64'>
      <div className='flex justify-between'>
        <div className='text-3xl flex flex-col 2xl:flex-row gap-y-7'>
          <Link href='/'>
            <span className='cursor-pointer mx-4'>Mission</span>
          </Link>
          <Link href='/'>
            <span className='cursor-pointer mx-4'>Product</span>
          </Link>
          <Link href='/'>
            <span className='cursor-pointer mx-4'>Docs</span>
          </Link>
          <Link href='/'>
            <span className='cursor-pointer mx-4'>Join ✌</span>
          </Link>
        </div>
        <div className='text-lg flex flex-col 2xl:flex-row'>
          <Link href='/'>
            <span className='cursor-pointer mx-4'>Careers</span>
          </Link>
          <Link href='/'>
            <span className='cursor-pointer mx-4'>Login</span>
          </Link>
          <Link href='/privacy'>
            <span className='cursor-pointer mx-4'>Privacy</span>
          </Link>
          <Link href='/'>
            <span className='cursor-pointer mx-4'>Terms of Use</span>
          </Link>
        </div>
      </div>
      <div className='flex flex-col xl:flex-row items-center lg:justify-between mt-20'>
        <div className='flex flex-row gap-x-10 mb-16 xl:mb-0'>
          <Link href={'https://github.com'}>
            <Image
              src={theme === 'light' ? '/assets/github-light.svg' : '/assets/github-dark.svg'}
              width={24}
              height={24}
              alt=''
              className='cursor-pointer'
            />
          </Link>
          <Link href={'https://discord.com'}>
            <Image
              src={theme === 'light' ? '/assets/discord-light.svg' : '/assets/discord-dark.svg'}
              width={24}
              height={24}
              alt=''
              className='cursor-pointer'
            />
          </Link>
          <Link href={'https://twitter.com'}>
            <Image
              src={theme === 'light' ? '/assets/twitter-light.svg' : '/assets/twitter-dark.svg'}
              width={24}
              height={24}
              alt=''
              className='cursor-pointer'
            />
          </Link>
        </div>
        <Link href={'/'}>
          <div className='cursor-pointer'>
            <Image
              src={theme === 'light' ? '/findlabs-logo-black.svg' : '/findlabs-logo-white.svg'}
              width={155}
              height={40}
              alt=''
            />
          </div>
        </Link>
        <div className='text-lg mt-5 xl:mt-0'>
          © 2022 Find Labs Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
