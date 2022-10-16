import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { z } from 'zod';

import Button from '../../Button';
import SocialLogin from '../../SocialLogin';
import Input from '../../radix/Input';

import { trpc } from '../../../utils/trpc';

import KeyIcon from '../../../assets/icon/key.svg';

const Login = () => {
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
        setError('Email is not valid!');
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

      signIn('email', {
        email,
      });
    } catch {
      setError(email ? 'Email is not valid!' : 'Please insert email address');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-[480px] mx-auto w-full">
      <h1 className="font-semibold text-4xl mb-3">Let&apos;s Explore</h1>
      <p className="text-gray-400 text-sm sm:text-base mb-4 font-normal">
        Log in to continue your Find journey
      </p>
      <SocialLogin />
      <form onSubmit={handleSubmit}>
        <Input
          className="w-full text-left mb-4"
          label="Email"
          value={email}
          onChange={setEmail}
          error={error}
          placeholder="name@email.com"
        />
        <Button
          type="submit"
          text="Log in with Email"
          solid
          full
          primary
          className="mx-0"
          loading={loading}
        />
      </form>
      <div className="bg-gray-100-dark light:bg-gray-100 text-gray-500-dark light:text-gray-500 py-3.5 px-4 text-center rounded-lg text-sm flex mt-4">
        <div className="w-6 h-6 mr-3 ml-auto">
          <Image src={KeyIcon} alt="secret" />
        </div>
        <div className="mr-auto">We&apos;ll email you a magic link to log in.</div>
      </div>
    </div>
  );
};

export default Login;
