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
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    );
  else
    return (
      <div className={clx(theme)}>
        <div className="m-10 rounded-2xl bg-center bg-cover bg-[url('/assets/coming-soon-light-bg.svg')] dark:bg-[url('/assets/coming-soon-dark-bg.svg')]">
          <Navbar />
          <div>{children}</div>
        </div>
      </div>
    );
};

export default Layout;
