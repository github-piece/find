import GoogleIcon from "../assets/icon/google-logo.svg";
import AppleIcon from "../assets/icon/apple-logo.svg";
import GithubIcon from "../assets/icon/github-logo.svg";
import Button from "./Button";
import { FACEBOOK_AUTH_URL, GOOGLE_AUTH_URL } from "../constants";

const SocialLogin = () => {
  const socialLogin = (type: string) => {
    switch (type) {
      case "facebook":
        window.open(FACEBOOK_AUTH_URL);
        break;
      default:
        window.open(GOOGLE_AUTH_URL);
    }
  };
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
