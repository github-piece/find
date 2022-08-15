import GoogleIcon from "../assets/icon/google-logo.svg";
import AppleIcon from "../assets/icon/apple-logo.svg";
import GithubIcon from "../assets/icon/github-logo.svg";
import Button from "./Button";
import { signIn } from "next-auth/react";
import classNames from "classnames";

const SocialLogin = () => {
  let count = Object.values(process.env.providers as any).filter(v => v).length

  const socialLogin = (type: string) => {
    signIn(type)
  };

  return (
    <div className={classNames(
      "grid grid gap-3",
      count === 3 ? 'grid-cols-3' : count === 2 ? 'grid-cols-2' : 'grid-cols-1'
    )}>
      {(process.env.providers as any).google && <Button
        text=""
        icon={GoogleIcon}
        onClick={() => socialLogin("google")}
        full
      />}
      {(process.env.providers as any).apple && <Button
        text=""
        icon={AppleIcon}
        onClick={() => socialLogin("apple")}
        full
      />}
      {(process.env.providers as any).github && <Button
        text=""
        icon={GithubIcon}
        onClick={() => socialLogin("github")}
        full
      />}
    </div>
  );
};

export default SocialLogin;
