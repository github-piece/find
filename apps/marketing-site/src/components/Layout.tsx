import { useTheme } from 'next-themes';
import clx from 'classnames';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme: theme } = useTheme();
  const isWaitList = process.env.waitlist && process.env.waitlist !== 'false';

  if (isWaitList == false)
    return (
      <div className={clx(theme, 'mx-auto')}>
        <div className='dark:bg-[#262626] pb-10'>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    );
  else
    return (
      <div className={clx(theme)}>
        <div>{children}</div>
      </div>
    );
};

export default Layout;
