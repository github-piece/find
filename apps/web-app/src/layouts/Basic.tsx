import classNames from "classnames";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect } from "react";

const BasicLayout = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();
  const { theme } = useTheme();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status !== "authenticated") return <></>;

  return <div className={classNames(theme)}>{children}</div>;
};

export default BasicLayout;
