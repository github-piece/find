import { useEffect, useState } from "react"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/router"

import Button from "../components/Button"
import SocialLogin from "../components/SocialLogin"
import { validateEmail } from "../utils/helper"
import { z } from "zod";

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
        console.log('passed', email)
      } else {
        console.log('emailadf', email)
      }
    } catch (err) {
      setError(email ? 'Email is  invalid' : 'Email is required')
    }
    if (!validateEmail(email)) {
      return
    }
    setLoading(true)
    // signIn("email", { email })
  }

  useEffect(() => {
    // if (status === 'authenticated' && data.user?.email) {
    //   if (data.user.hasPassword) {
    //     router.push('/auth/enter-password')
    //   } else {
    //     router.push('/auth/create-password')
    //   }
    // }
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
