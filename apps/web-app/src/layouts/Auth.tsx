import classNames from "classnames";
import { useTheme } from "next-themes";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <div className="bg-white dark:bg-dark">
        <Navbar />
        <div className="flex mx-auto w-full text-center lg:h-[calc(100vh-160px)] items-center">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AuthLayout;
