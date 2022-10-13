import { useTheme } from 'next-themes';
import clx from 'classnames';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div className={clx(theme, 'w-full max-w-[1368px] p-6 mx-auto')}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
