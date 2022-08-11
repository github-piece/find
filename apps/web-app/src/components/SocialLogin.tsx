import GoogleIcon from "../assets/icon/google-logo.svg";
import AppleIcon from "../assets/icon/apple-logo.svg";
import GithubIcon from "../assets/icon/github-logo.svg";
import Button from "./Button";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import classNames from "classnames";

const SocialLogin = () => {
  const count = [
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    process.env.NEXT_PUBLIC_APPLE_CLIENT_ID
  ].filter(v => !!v).length
  const { data } = useSession()
  const socialLogin = (type: string) => {
    signIn(type)
  };
  useEffect(() => {
    // signOut()
  }, [])
  return (
    <div className={classNames(
      "grid grid gap-3",
      count === 3 ? 'grid-cols-3' : count === 2 ? 'grid-cols-2' : 'grid-cols-1'
    )}>
      {!!process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID && <Button
        text=""
        icon={GoogleIcon}
        onClick={() => socialLogin("google")}
        full
      />}
      {!!process.env.NEXT_PUBLIC_APPLE_CLIENT_ID && <Button
        text=""
        icon={AppleIcon}
        onClick={() => socialLogin("apple")}
        full
      />}
      {!!process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID && <Button
        text=""
        icon={GithubIcon}
        onClick={() => socialLogin("github")}
        full
      />}
    </div>
  );
};

export default SocialLogin;
