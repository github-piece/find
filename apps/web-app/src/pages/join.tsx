import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { z } from 'zod';

import Button from '../components/Button';
import SocialLogin from '../components/SocialLogin';
import Input from '../components/radix/Input';

import { trpc } from '../utils/trpc';

import CheckIcon from '../assets/icon/check.svg';

const Join = () => {
  const waitlistMutation = trpc.useMutation('auth.waitlist');
  const waitlistCheckMutation = trpc.useMutation('auth.isWaitlist');

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    try {
      if (!z.string().email().parse(email)) {
        setError('Email is invalid');
        return;
      }

      const isAllowed = await waitlistCheckMutation.mutateAsync({ email });
      if (!isAllowed) {
        const data = await waitlistMutation.mutateAsync({ email });
        if (data?.success) router.push('/waitlist-success');
        else {
          setLoading(false);
          setError('Something went wrong');
        }
        return;
      }

      signIn('email', { email });
    } catch (err) {
      setError(email ? 'Email is  invalid' : 'Email is required');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto w-full">
      <h1 className="font-semibold text-4xl mb-3">Become a Find Member</h1>
      <p className="text-gray-400 sm:text-lg text-sm mb-4 font-semibold">
        Experience the next generation of search, discovery, and exploration on the internet.
      </p>
      <div className="text-gray-700 sm:text-lg text-sm mb-4 grid grid-cols-2 sm:grid-cols-4">
        <div className="flex mx-auto">
          <Image src={CheckIcon} alt="check" />
          <div>Privacy-first</div>
        </div>
        <div className="flex mx-auto">
          <Image src={CheckIcon} alt="check" />
          <div>Open-source</div>
        </div>
        <div className="flex mx-auto">
          <Image src={CheckIcon} alt="check" />
          <div>Ad-free</div>
        </div>
        <div className="flex mx-auto">
          <Image src={CheckIcon} alt="check" />
          <div>$5 a month</div>
        </div>
      </div>
      <SocialLogin />
      {process.env.aws && (
        <form onSubmit={handleSubmit}>
          <Input
            className="w-full text-left mb-3"
            label="Email"
            value={email}
            onChange={setEmail}
            error={error}
            placeholder="name@email.com"
          />
          <Button
            type="submit"
            text="Join with Email"
            solid
            full
            primary
            className="mx-0"
            loading={loading}
          />
          <div className="bg-gray-100 dark:bg-gray-100-dark text-gray-500 dark:text-gray-500-dark py-3 px-4 text-center rounded text-sm flex mt-3">
            By creating an account, you agree to Find Labs Terms of Use and Privacy Policy. Your
            private data in Find is end-to-end encrypted.
          </div>
        </form>
      )}
    </div>
  );
};

Join.layout = 'Auth';

export default Join;
