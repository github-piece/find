import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { z } from 'zod';
import { useTheme } from 'next-themes';

import Button from '../components/Button';
import Input from '../components/radix/Input';

import { trpc } from '../utils/trpc';

import CheckIcon from '../assets/icon/check.svg';
import CheckWhiteIcon from '../assets/icon/check-white.svg';

const JoinWaitlist = () => {
  const { resolvedTheme: theme } = useTheme();

  const mutation = trpc.useMutation('auth.waitlist');
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    try {
      if (z.string().email().parse(email)) {
        const data = await mutation.mutateAsync({ email });
        if (data?.success) router.push('/waitlist-success');
        else {
          setLoading(false);
          setError('Something went wrong');
        }
      }
    } catch (err) {
      setError(email ? 'Email is  invalid' : 'Email is required');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-[560px] mx-auto w-full">
      <h1 className="font-semibold text-4xl mb-3">Join Waitlist</h1>
      <p className="text-gray-500 dark:text-gray-500-dark text-lg mb-4 max-w-[480px] mx-auto">
        Experience the next generation of search, discovery, and exploration on the internet.
      </p>
      <div className="text-gray-700 dark:text-gray-700-dark sm:text-base text-sm mb-4 grid grid-cols-2 sm:grid-cols-4">
        <div className="flex mx-auto">
          <Image src={theme === 'light' ? CheckIcon : CheckWhiteIcon} alt="check" />
          <div>Privacy-first</div>
        </div>
        <div className="flex mx-auto">
          <Image src={theme === 'light' ? CheckIcon : CheckWhiteIcon} alt="check" />
          <div>Open-source</div>
        </div>
        <div className="flex mx-auto">
          <Image src={theme === 'light' ? CheckIcon : CheckWhiteIcon} alt="check" />
          <div>Ad-free</div>
        </div>
        <div className="flex mx-auto">
          <Image src={theme === 'light' ? CheckIcon : CheckWhiteIcon} alt="check" />
          <div>$5 a month</div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="max-w-[480px] mx-auto">
        <div className="mb-4 mt-8">
          <Input label="Email" placeholder="name@email.com" value={email} onChange={setEmail} />
        </div>
        <Button
          type="submit"
          text="Join Waitlist"
          solid
          full
          primary
          className="mx-0"
          loading={loading}
        />
        <div className="bg-gray-100 dark:bg-gray-100-dark text-gray-500 dark:text-gray-500-dark py-3 px-4 text-center rounded text-sm flex mt-4">
          By joining the waitlist, you agree to the Find Labs Privacy Policy and to receive news and
          updates.
        </div>
      </form>
    </div>
  );
};

JoinWaitlist.layout = 'Auth';

export default JoinWaitlist;
