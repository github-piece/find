import { FormEvent, useState, useEffect } from 'react';
import { getSession, GetSessionParams } from 'next-auth/react';
import { useRouter } from 'next/router';

import Input from '../../components/radix/Input';
import Button from '../../components/Button';
import ErrorNotification from '../../components/notification/error';

import EyeIcon from '../../assets/icon/eye.svg';

const EnterPassword = () => {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('password');
  const [err, setErr] = useState('');

  const handleType = () => setType(type === 'text' ? 'password' : 'text');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    // always redirect to home page
    router.push('/');
  };

  return (
    <div className="max-w-[600px] mx-auto w-full">
      <h1 className="font-semibold text-4xl mb-3 mx-auto">
        Enter your
        <br className="sm:hidden block" /> Find master password
      </h1>
      <div className="max-w-[480px] mx-auto">
        <p className="text-gray-500 dark:text-gray-500-dark sm:text-lg text-sm mb-12 mb-8">
          Your private data in Find is end-to-end-encrypted. Enter the master password for your
          account to unlock.
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            className="w-full text-left mb-4"
            label="Master Password"
            type={type}
            value={password}
            onChange={setPassword}
            placeholder="Enter your Password"
            icon={EyeIcon}
            onIconClick={handleType}
          />
          <Button
            primary
            type="submit"
            text="Unlock"
            solid
            full
            className="mx-0"
            loading={loading}
            disabled={!password}
          />
        </form>
        <ErrorNotification message={err} />
      </div>
    </div>
  );
};

EnterPassword.layout = 'Auth';

export async function getServerSideProps(context: GetSessionParams | undefined) {
  const session = await getSession(context);
  if (!session?.user)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };

  return { props: {} };
}

export default EnterPassword;
