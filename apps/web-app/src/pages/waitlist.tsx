import { useEffect, useState } from "react"
import Button from "../components/Button";
import SocialLogin from "../components/SocialLogin"
import { z } from 'zod'
import Input from "../components/radix/Input";
import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";

const JoinWaitlist = () => {
  const mutation = trpc.useMutation("auth.waitlist")
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true)
    setError('')
    try {
      if (z.string().email().parse(email)) {
        mutation.mutate({ email })
      }
    } catch (err) {
      setError(email ? 'Email is  invalid' : 'Email is required')
    }
    setLoading(false)
  }

  useEffect(() => {
    if (mutation.data?.success) {
      router.push("/waitlist-success")
    }
  }, [mutation.data, router])

  return (
    <div className="max-w-lg mx-auto w-full">
      <h1 className="font-semibold text-4xl mb-3">Join Waitlist</h1>
      <p className="text-gray-400 text-sm mb-4 font-semibold">
        Experience the next generation of search, discovery, and exploration on the internet.
      </p>
      <SocialLogin />
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
          </div>
        </div>
      </div>
      <Button
        type="submit"
        text="Join Waitlist"
        solid
        full
        className="mx-0"
        loading={loading}
        onClick={handleSubmit}
      />
      <div className="bg-gray-200 text-gray-500 py-3 px-4 text-center rounded text-sm flex mt-3">
        By join waitlist, you agree to Find Labs Privacy Policy and to receive news and updates.
      </div>
    </div>
  )
}

JoinWaitlist.layout = "Auth"

export default JoinWaitlist
