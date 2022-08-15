import { useEffect, useState } from "react"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/router"

import Button from "../components/Button"
import SocialLogin from "../components/SocialLogin"
import { z } from "zod";
import Input from "../components/radix/Input"

const Join = () => {
  const { data, status } = useSession()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = () => {
    setError('')
    try {
      if (z.string().email().parse(email)) {
        signIn("email", { email })
      }
    } catch (err) {
      setError(email ? 'Email is  invalid' : 'Email is required')
    }
    setLoading(true)
  }

  useEffect(() => {
    if (status === 'authenticated' && data.user?.email) {
      router.push('/auth/create-password')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  return (
    <>
      <h1 className="font-semibold text-4xl mb-3">Create an account</h1>
      <p className="text-gray-400 text-sm mb-4 font-semibold">Start now and manage tabs, bookmakrs, your browser history, perform all sorts of actions and more.</p>
      <SocialLogin />
      <div className="relative flex py-5 items-center sm:mt-8">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400">OR</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
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
        text="Join with Email"
        solid
        full
        className="mx-0"
        loading={loading}
        onClick={handleSubmit}
      />
      <div className="bg-gray-200 text-gray-500 py-3 px-4 text-center rounded text-sm flex mt-3">
        By creating an account, you agree to Find Terms of Use, Privacy Policy and to receive news and updates.
      </div>
    </>
  )
}

Join.layout = "Auth"

export default Join
