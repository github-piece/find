// import { FormEvent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { z } from 'zod';
import { useTheme } from 'next-themes';
// import { trpc } from 'web-app/src/utils/trpc';


const ComingSoon = () => {
  const { resolvedTheme: theme } = useTheme();

  // const mutation = trpc.useMutation('auth.waitlist');
  // const router = useRouter();
  // const [email, setEmail] = useState('');
  // const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);
  //
  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //
  //   setLoading(true);
  //   setError('');
  //   try {
  //     if (z.string().email().parse(email)) {
  //       const data = await mutation.mutateAsync({ email });
  //       if (data?.success) router.push('/waitlist-success');
  //       else {
  //         setLoading(false);
  //         setError('Something went wrong');
  //       }
  //     }
  //   } catch (err) {
  //     setError(email ? 'Email is  invalid' : 'Email is required');
  //   }
  //   setLoading(false);
  // };

  return (
    <div className='text-center pb-9'>
      <div className='mt-80'>
        <div className='mb-10 flex justify-center'>
          <Image
            src={theme === 'light' ? '/assets/coming-soon-light.svg' : '/assets/coming-soon-dark.svg'}
            width={960}
            height={140}
            alt='Coming Soon'
          />
        </div>
        <p className='text-gray-600 dark:text-gray-600-dark text-xl max-w-[800px] mx-auto px-12'>
          Our mission is to build the future of search, discovery, and exploration on the internet
          through privacy-first, open-source, and ad-free tools.
        </p>
      </div>
      <div className='mt-20 pb-2.5'>
        <div className='mb-10'>
          <h2 className='text-2xl'>
            Get notified when we launch
          </h2>
          <form method='post'>
            <div className='flex flex-row justify-center mt-4'>
              <input type='text' id='email'
                     className='w-96 h-16 text-lg pl-6 mt-3 border border-solid border-[#e8e8eb] dark:border-[#2c2c2c] rounded'
                     placeholder='Please enter the email address' />
              <button type='submit' className='ml-5'>
                <Image
                  src='/assets/notify-me.svg'
                  width={188}
                  height={64}
                  alt='Notify me'
                />
              </button>
            </div>
          </form>
        </div>
        <div className='flex justify-center'>
          <Link href={'https://github.com/find-labs'}>
            <div className='flex cursor-pointer block'>
              <Image
                src={theme === 'light' ? '/assets/github-light.svg' : '/assets/github-dark.svg'}
                width={21}
                height={21}
                alt='Github'
              />
            </div>
          </Link>
          <Link href={'https://discord.gg/2CYJAH8e29'}>
            <div className='flex cursor-pointer mx-10'>
              <Image
                src={theme === 'light' ? '/assets/discord-light.svg' : '/assets/discord-dark.svg'}
                width={21}
                height={21}
                alt='Discord'
              />
            </div>
          </Link>
          <Link href={'https://twitter.com/findlabs'}>
            <div className='flex cursor-pointer'>
              <Image
                src={theme === 'light' ? '/assets/twitter-light.svg' : '/assets/twitter-dark.svg'}
                width={21}
                height={21}
                alt='Twitter'
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
