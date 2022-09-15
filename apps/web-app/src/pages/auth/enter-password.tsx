import { FormEvent, useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Button from '../../components/Button';
import EyeIcon from '../../assets/icon/eye.svg';
import ErrIcon from '../../assets/icon/error.svg';
import ErrWhiteIcon from '../../assets/icon/error-white.svg';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Input from '../../components/radix/Input';

const EnterPassword = () => {
  const { status } = useSession();
  const router = useRouter();
  const { theme } = useTheme();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('password');
  const [err, setErr] = useState(false);

  const handleType = () => setType(type === 'text' ? 'password' : 'text');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    // always redirect to home page
    router.push('/');
  };

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/login');
  }, [status, router]);

  if (status !== 'authenticated') return <></>;

  return (
    <div className="max-w-[600px] mx-auto w-full">
      <h1 className="font-semibold text-4xl mb-3 mx-auto">
        Enter your
        <br className="sm:hidden block" /> Find master password
      </h1>
      <div className="max-w-[480px] mx-auto">
        <p className="text-gray-400 sm:text-lg text-sm mb-12 font-semibold mb-8">
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
          />
        </form>
        {!err && (
          <div className="bg-red-100 dark:bg-red-500 text-red-500 dark:text-white py-3 px-4 text-center rounded text-sm flex mt-4">
            <div className="w-6 h-6 mr-3 ml-auto">
              <Image src={theme === 'dark' ? ErrWhiteIcon : ErrIcon} alt="error" />
            </div>
            <div className="mr-auto">Wrong password. Give it another go!</div>
          </div>
        )}
      </div>
    </div>
  );
};

EnterPassword.layout = 'Auth';

export default EnterPassword;
