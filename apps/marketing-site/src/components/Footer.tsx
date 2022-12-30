import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Footer = () => {
  const { resolvedTheme: theme } = useTheme();

  return (
    <div className='mt-40 mx-10 bg-[#f8f9fd] dark:bg-[#2c2c2c] rounded-2xl py-20 px-5 sm:px-20 lg:px-64'>
      <div className='flex justify-between'>
        <div className='text-3xl flex flex-col 2xl:flex-row gap-8'>
          <Link href='/'>
            <span className='cursor-pointer'>Mission</span>
          </Link>
          <Link href='/'>
            <span className='cursor-pointer'>Product</span>
          </Link>
          <Link href='/'>
            <span className='cursor-pointer'>Docs</span>
          </Link>
          <Link href='/'>
            <span className='cursor-pointer'>Join ✌</span>
          </Link>
        </div>
        <div className='text-lg flex flex-col 2xl:flex-row gap-8'>
          <Link href='/'>
            <span className='cursor-pointer'>Careers</span>
          </Link>
          <Link href='/'>
            <span className='cursor-pointer'>Login</span>
          </Link>
          <Link href='/privacy'>
            <span className='cursor-pointer'>Privacy</span>
          </Link>
          <Link href='/'>
            <span className='cursor-pointer'>Terms of Use</span>
          </Link>
        </div>
        <div className='flex flex-row gap-10 lg:hidden'>
          <Link href={'https://github.com'}>
            <Image
              src={theme === 'light' ? '/assets/light/github.svg' : '/assets/dark/github.svg'}
              width={24}
              height={24}
              alt=''
              className='cursor-pointer'
            />
          </Link>
          <Link href={'https://discord.com'}>
            <Image
              src={theme === 'light' ? '/assets/light/discord.svg' : '/assets/dark/discord.svg'}
              width={24}
              height={24}
              alt=''
              className='cursor-pointer'
            />
          </Link>
          <Link href={'https://twitter.com'}>
            <Image
              src={theme === 'light' ? '/assets/light/twitter.svg' : '/assets/dark/twitter.svg'}
              width={24}
              height={24}
              alt=''
              className='cursor-pointer'
            />
          </Link>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between mt-12 lg:mt-20'>
        <div className='hidden lg:flex flex-row gap-10'>
          <Link href={'https://github.com'}>
            <Image
              src={theme === 'light' ? '/assets/light/github.svg' : '/assets/dark/github.svg'}
              width={24}
              height={24}
              alt=''
              className='cursor-pointer'
            />
          </Link>
          <Link href={'https://discord.com'}>
            <Image
              src={theme === 'light' ? '/assets/light/discord.svg' : '/assets/dark/discord.svg'}
              width={24}
              height={24}
              alt=''
              className='cursor-pointer'
            />
          </Link>
          <Link href={'https://twitter.com'}>
            <Image
              src={theme === 'light' ? '/assets/light/twitter.svg' : '/assets/dark/twitter.svg'}
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
        <div className='text-lg'>
          © 2022 Find Labs Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
