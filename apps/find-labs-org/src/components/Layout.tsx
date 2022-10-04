import { useTheme } from 'next-themes';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <Navbar />
      <div className="flex sm:mx-auto sm:px-0 px-8 w-full text-center lg:h-[calc(100vh-160px)] min-h-[calc(100vh-160px)] items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
