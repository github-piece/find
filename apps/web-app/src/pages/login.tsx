import { useEffect, useState } from "react"
import Button from "../components/Button";
import SocialLogin from "../components/SocialLogin"
import KeyIcon from "../assets/icon/key.svg"
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

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

    if (email) {
      if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        setError('Email is not valid!')
        return
      }
      setError('')
      signIn('email', {
        email
      })
    } else {
      setError('Please insert email address')
    }
  }, [email, submitted])

  useEffect(() => {
    if (status === 'authenticated' && data.user?.email) {
      if (data.user.hasPassword) {
        router.push('/auth/enter-password')
      } else {
        router.push('/auth/create-password')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  return (
    <>
      <h1 className="font-semibold text-4xl mb-3">Welcome back!</h1>
      <p className="text-gray-400 text-sm mb-4 font-semibold">Log in with your data that you enterd during your registration.</p>
      <SocialLogin />
      <div className="relative flex py-5 items-center sm:mt-8">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400">OR</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="flex flex-wrap mb-3">
        <div className="w-full text-left">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="name@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <div className="text-red-500 text-sm font-medium">
            {error}
          </div>
        </div>
      </div>
      <Button
        type="submit"
        text="Log in with Email"
        solid
        full
        className="mx-0"
        loading={loading}
        onClick={handleSubmit}
      />
      <div className="bg-gray-200 text-gray-500 py-3 px-4 text-center rounded text-sm flex mt-3">
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
