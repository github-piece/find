import { useEffect, useState } from "react"
import Button from "../components/Button";
import SocialLogin from "../components/SocialLogin"
import KeyIcon from "../assets/icon/key.svg"
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Input from "../components/radix/Input";
import { z } from "zod";
import { useTheme } from "next-themes";

const Login = () => {
  const { data, status } = useSession()
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true)
    if (error) return
    setLoading(false)
  }

  useEffect(() => {
    if (!submitted) return

    try {
      if (z.string().email().parse(email)) {
        setError('')
        signIn('email', {
          email
        })
      }
    } catch {
      setError(email ? 'Email is not valid!' : 'Please insert email address')
    }
    
  }, [email, submitted])

  useEffect(() => {
    if (status === 'authenticated' && data.user?.email) {
      router.push('/auth/enter-password')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  return (
    <>
      <h1 className="font-semibold text-4xl mb-3 dark:text-white">Let's Explore</h1>
      <p className="text-gray-400 text-sm mb-4 font-semibold">Log in with your data that you enterd during your registration.</p>
      <SocialLogin />
      <Input
        className="w-full text-left mb-3"
        label="Email"
        value={email}
        onChange={setEmail}
        error={error}
        placeholder="name@email.com"
      />
      <Button
        type="submit"
        text="Log in with Email"
        solid
        full
        primary
        className="mx-0"
        loading={loading}
        onClick={handleSubmit}
      />
      <div className="bg-gray-100 dark:bg-dark text-gray-500 dark:bg-[#212121] py-3 px-4 text-center rounded text-sm flex mt-3">
        <div className="w-6 h-6 mr-3 ml-auto">
          <Image src={KeyIcon} alt="secret" />
        </div>
        <div className="mr-auto">We&apos;ll email you a magic link for log in.</div>
      </div>
    </>
  )
}

Login.layout = "Auth"

export default Login
