import Image from 'next/image';
import Link from 'next/link';
import { z } from 'zod';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';

const ComingSoon = () => {
  const router = useRouter();
  const { resolvedTheme: theme } = useTheme();
  const [email, setEmail] = useState('');
  const [err, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [isHoveringGithub, setIsHoveredGithub] = useState(false);
  const onMouseEnterGithub = () => setIsHoveredGithub(true);
  const onMouseLeaveGithub = () => setIsHoveredGithub(false);

  const [isHoveringDiscord, setIsHoveredDiscord] = useState(false);
  const onMouseEnterDiscord = () => setIsHoveredDiscord(true);
  const onMouseLeaveDiscord = () => setIsHoveredDiscord(false);

  const [isHoveringTwitter, setIsHoveredTwitter] = useState(false);
  const onMouseEnterTwitter = () => setIsHoveredTwitter(true);
  const onMouseLeaveTwitter = () => setIsHoveredTwitter(false);

  const getBaseUrl = () => {
    if (process.env.production && process.env.production !== 'false')
      return `https://find.new`; // SSR should use vercel url
    else
      return 'http://localhost:3000'; // dev SSR should use localhost
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    const url = getBaseUrl();
    try {
      if (z.string().email().parse(email)) {
        await fetch(`${url}/api/notified`, {
          method: 'post',
          mode: 'no-cors',
          body: JSON.stringify({ email })
        });

        await router.push(`${url}/waitlist-success`);
      }
    } catch (e) {
      setError(email ? 'Email is  invalid' : 'Email is required');
    }
    setLoading(false);
  };

  return (
    <div className="
        md:m-10 md:rounded-2xl
        bg-center bg-cover
        bg-[url('/assets/light/coming-soon-bg.svg')] dark:bg-[url('/assets/dark/coming-soon-bg.svg')]
        md:bg-[url('/assets/light/coming-soon-bg-md.svg')] dark:md:bg-[url('/assets/dark/coming-soon-bg-md.svg')]
        lg:bg-[url('/assets/light/coming-soon-bg-lg.svg')] lg:dark:bg-[url('/assets/dark/coming-soon-bg-lg.svg')]
        ">
      <Navbar />
      <div className='text-center pb-[50%] md:pb-[40%] lg:pb-[20%]'>
        <div className='mt-[35%] md:mt-[50%] lg:mt-[20%]'>
          <div className='mb-10 flex justify-center'>
            <Image
              src={theme === 'light' ? '/assets/light/coming-soon-lg.svg' : '/assets/dark/coming-soon-lg.svg'}
              className='hidden lg:block'
              width={876}
              height={138}
              alt=''
            />
            <Image
              src={theme === 'light' ? '/assets/light/coming-soon-md.svg' : '/assets/dark/coming-soon-md.svg'}
              className='hidden md:block lg:hidden'
              width={751}
              height={119}
              alt=''
            />
            <Image
              src={theme === 'light' ? '/assets/light/coming-soon.svg' : '/assets/dark/coming-soon.svg'}
              className='block md:hidden'
              width={233}
              height={152}
              alt=''
            />
          </div>
          <p className='text-gray-600 dark:text-gray-600-dark text-xl max-w-[800px] mx-auto px-12'>
            Our mission is to build the future of search, discovery, and exploration on the internet
            through privacy-first, open-source, and ad-free tools.
          </p>
        </div>
        <div className='mt-20'>
          <div className='mb-10'>
            <h2 className='text-2xl'>
              Get notified when we launch
            </h2>
            <div className='flex flex-col place-items-center md:flex-row justify-center mt-4'>
              <input type='text' id='email'
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     className='w-4/5 md:w-96 h-16 text-lg pl-6 border border-solid border-[#e8e8eb] dark:border-[#2c2c2c] rounded-2xl'
                     placeholder='Please enter the email address' />
              <button
                onClick={handleSubmit}
                className=
                  'md:ml-5 mt-4 md:mt-0 bg-primary text-white text-xl rounded-3xl px-10 py-5 border-8 border-current hover:border-blue-200 dark:border-[#262626] dark:hover:border-[#263650] w-4/5 md:w-auto'>
                Notify me
              </button>
            </div>
          </div>
          <div className='flex justify-center'>
            <Link href={'https://github.com/find-labs'}>
              <div className='flex cursor-pointer block' onMouseEnter={onMouseEnterGithub}
                   onMouseLeave={onMouseLeaveGithub}>
                {isHoveringGithub ? (
                  <Image
                    src={theme === 'light' ? '/assets/dark/github.svg' : '/assets/light/github.svg'}
                    width={21}
                    height={21}
                    alt=''
                  />
                ) : (
                  <Image
                    src={theme === 'light' ? '/assets/light/github.svg' : '/assets/dark/github.svg'}
                    width={21}
                    height={21}
                    alt=''
                  />
                )}
              </div>
            </Link>
            <Link href={'https://discord.gg/2CYJAH8e29'}>
              <div className='flex cursor-pointer mx-10' onMouseEnter={onMouseEnterDiscord}
                   onMouseLeave={onMouseLeaveDiscord}>
                {isHoveringDiscord ? (
                  <Image
                    src={theme === 'light' ? '/assets/dark/discord.svg' : '/assets/light/discord.svg'}
                    width={21}
                    height={21}
                    alt=''
                  />
                ) : (
                  <Image
                    src={theme === 'light' ? '/assets/light/discord.svg' : '/assets/dark/discord.svg'}
                    width={21}
                    height={21}
                    alt=''
                  />
                )}
              </div>
            </Link>
            <Link href={'https://twitter.com/findlabs'}>
              <div className='flex cursor-pointer' onMouseEnter={onMouseEnterTwitter}
                   onMouseLeave={onMouseLeaveTwitter}>
                {isHoveringTwitter ? (
                  <Image
                    src={theme === 'light' ? '/assets/dark/twitter.svg' : '/assets/light/twitter.svg'}
                    width={21}
                    height={21}
                    alt=''
                  />
                ) : (
                  <Image
                    src={theme === 'light' ? '/assets/light/twitter.svg' : '/assets/dark/twitter.svg'}
                    width={21}
                    height={21}
                    alt=''
                  />
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
