import GoogleIcon from "../assets/icon/google-logo.svg";
import AppleIcon from "../assets/icon/apple-logo.svg";
import GithubIcon from "../assets/icon/github-logo.svg";
import Button from "./Button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

const SocialLogin = () => {
  const { data } = useSession()
  const socialLogin = (type: string) => {
    signIn(type)
  };
  useEffect(() => {
    // signOut()
  }, [])
  return (
    <div className="grid grid grid-cols-3 gap-3">
      <Button
        text=""
        icon={GoogleIcon}
        onClick={() => socialLogin("google")}
        full
      />
      <Button
        text=""
        icon={AppleIcon}
        onClick={() => socialLogin("apple")}
        full
      />
      <Button
        text=""
        icon={GithubIcon}
        onClick={() => socialLogin("github")}
        full
      />
    </div>
  );
};

export default SocialLogin;
