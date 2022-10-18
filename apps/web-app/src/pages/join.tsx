import { FormEvent, useState } from 'react';
import { signIn, getSession, GetSessionParams } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { z } from 'zod';
import { useTheme } from 'next-themes';

import Button from '../components/Button';
import SocialLogin from '../components/SocialLogin';
import Input from '../components/radix/Input';

import { trpc } from '../utils/trpc';
import { prisma } from '../server/db/client';

import CheckIcon from '../assets/icon/check.svg';
import CheckWhiteIcon from '../assets/icon/check-white.svg';

const Join = () => {
  const { resolvedTheme: theme } = useTheme();

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
    <div className="max-w-lg mx-auto w-full theme">
      <div className={theme}>
        <h1 className="font-semibold text-4xl mb-3">Become a Find Member</h1>
        <p className="text-gray-500 dark:text-gray-500-dark sm:text-lg text-sm mb-4">
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
        <SocialLogin />
        {process.env.aws && (
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
              text="Join with Email"
              solid
              full
              primary
              className="mx-0"
              loading={loading}
            />
            <div className="bg-gray-100 dark:bg-gray-50-dark text-gray-400 dark:text-gray-400-dark py-3.5 px-4 text-center rounded-lg text-sm flex mt-4">
              By creating an account, you agree to Find Labs Terms of Use and Privacy Policy. Your
              private data in Find is end-to-end encrypted.
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

Join.layout = 'Auth';

export async function getServerSideProps(context: GetSessionParams | undefined) {
  const session = await getSession(context);
  const email = session?.user?.email;
  if (email) {
    const user = await prisma.user.findFirst({ where: { email }, include: { accounts: true } });
    if (user) {
      if (user?.emailVerified || user.accounts[0]?.provider) {
        return {
          redirect: {
            destination: '/auth/enter-password',
            permanent: false,
          },
        };
      } else {
        return {
          redirect: {
            destination: '/auth/create-password',
            permanent: false,
          },
        };
      }
    }
  }
  return { props: {} };
}

export default Join;
