import { useTheme } from 'next-themes';
import clx from 'classnames';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme: theme } = useTheme();
  const isWaitlist = process.env.waitlist && process.env.waitlist !== 'false';

  if (isWaitlist == false)
    return (
      <div className={clx(theme, 'mx-auto')} >
        <div className='dark:bg-[#262626] pb-10'>
          <Navbar />
          <div >{children}</div>
          <Footer />
        </div>
      </div>
    );
  else
    return (
      <div className={clx(theme)}>
        <div className="md:m-10 md:rounded-2xl bg-center bg-cover bg-[url('/assets/coming-soon-light-bg.svg')] dark:bg-[url('/assets/coming-soon-dark-bg.svg')]">
          <Navbar />
          <div>{children}</div>
        </div>
      </div>
    );
};

export default Layout;
