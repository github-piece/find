import { FormEvent, useEffect, useState } from "react";
import Button from "../../components/Button";
import EyeIcon from "../../assets/icon/eye.svg";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Input from "../../components/radix/Input";

const EnterPassword = () => {
  const { status } = useSession();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("password");

  const handleType = () => setType(type === "text" ? "password" : "text");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  if (status !== "authenticated") return <></>;

  return (
    <div className="max-w-[600px] mx-auto w-full">
      <h1 className="font-semibold text-4xl mb-3 mx-auto">
        Enter your
        <br className="sm:hidden block" /> Find master password
      </h1>
      <div className="max-w-[480px] mx-auto">
        <p className="text-gray-400 sm:text-lg text-sm mb-12 font-semibold mb-8">
          Your private data in Find is end-to-end-encrypted. Enter the master
          password for your account to unlock.
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            className="w-full text-left mb-3"
            label="Master Password"
            type={type}
            value={password}
            onChange={setPassword}
            placeholder="Enter your Password"
            icon={EyeIcon}
            onIconClick={handleType}
          />
          <Button
            type="submit"
            text="Unlock"
            solid
            full
            className="mx-0"
            loading={loading}
          />
        </form>
      </div>
    </div>
  );
};

EnterPassword.layout = "Auth";

export default EnterPassword;
