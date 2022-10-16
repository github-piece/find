import { FormEvent, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useTheme } from 'next-themes';
import { z } from 'zod';

import Button from '../../Button';
import SocialLogin from '../../SocialLogin';
import Input from '../../radix/Input';

import { trpc } from '../../../utils/trpc';

import KeyIcon from '../../../assets/icon/key.svg';
import ErrIcon from '../../../assets/icon/error.svg';
import ErrWhiteIcon from '../../../assets/icon/error-white.svg';

const Login = () => {
  const { resolvedTheme } = useTheme();

  const userExists = trpc.useMutation('auth.exists');

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [exists, setExists] = useState(true);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    try {
      if (!z.string().email().parse(email)) {
        setError('Email is not valid!');
      }

      const status = await userExists.mutateAsync({ email });
      if (!status) {
        setExists(false);
        setLoading(false);
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
      <p className="text-gray-400 text-sm mb-4 font-normal">Log in to continue your Find journey</p>
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
      <div className="bg-gray-100 dark:bg-gray-100-dark text-gray-500 dark:text-gray-500-dark py-3 px-4 text-center rounded text-sm flex mt-4">
        <div className="w-6 h-6 mr-3 ml-auto">
          <Image src={KeyIcon} alt="secret" />
        </div>
        <div className="mr-auto">We&apos;ll email you a magic link to log in.</div>
      </div>
      {!exists && (
        <div className="bg-red-100 dark:bg-red-500 text-red-500 dark:text-white py-3 px-4 text-center rounded text-sm flex mt-4">
          <div className="w-6 h-6 mr-3 ml-auto">
            <Image src={resolvedTheme === 'light' ? ErrIcon : ErrWhiteIcon} alt="error" />
          </div>
          <div className="mr-auto">
            There is no account associated with this email.{' '}
            <Link href="/join">
              <span className="underline cursor-pointer">Sign Up</span>
            </Link>
            ?
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
