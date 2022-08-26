import { FormEvent, useEffect, useState } from "react"
import Button from "../components/Button";
import SocialLogin from "../components/SocialLogin"
import KeyIcon from "../assets/icon/key.svg"
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Input from "../components/radix/Input";
import { z } from "zod";

const Login = () => {
  const { data, status } = useSession()
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
    <div className="max-w-[480px] mx-auto w-full">
      <h1 className="font-semibold text-4xl mb-3">Let&apos;s Explore</h1>
      <p className="text-gray-400 sm:text-lg text-sm mb-4 font-semibold">Log in to continue your Find journey</p>
      <SocialLogin />
      <form onSubmit={handleSubmit}>
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
        />
      </form>
      <div className="bg-gray-100 dark:bg-gray-100-dark text-gray-500 dark:text-gray-500-dark py-3 px-4 text-center rounded text-sm flex mt-3">
        <div className="w-6 h-6 mr-3 ml-auto">
          <Image src={KeyIcon} alt="secret" />
        </div>
        <div className="mr-auto">We&apos;ll email you a magic link to log in.</div>
      </div>
    </div>
  )
}

Login.layout = "Auth"

export default Login
