import { useTheme } from 'next-themes';
import clx from 'classnames';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme: theme } = useTheme();

  if (process.env.NEXT_PUBLIC_IS_WAITLIST == 'false')
    return (
      <div className={clx(theme, 'w-full max-w-[1368px] p-6 mx-auto ')} >
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    );
  else
    return (
      <div className={clx(theme)}>
        <div className="-mt-3 bg-no-repeat bg-cover bg-[url('/assets/coming-soon-light-bg.svg')] dark:bg-[url('/assets/coming-soon-dark-bg.svg')]">
          <Navbar />
          <div>{children}</div>
        </div>
      </div>
    );
};

export default Layout;
