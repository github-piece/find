import { useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const BasicLayout = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status !== 'authenticated') return <></>;

  return (
    <div className={resolvedTheme}>
      <div className="bg-white dark:bg-dark">{children}</div>
    </div>
  );
};

export default BasicLayout;
