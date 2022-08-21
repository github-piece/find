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
    <>
      <h1 className="font-semibold text-4xl mb-3">Join Waitlist</h1>
      <p className="text-gray-400 text-sm mb-4 font-semibold">
        Experience the next generation of search, discovery, and exploration on the internet.
      </p>
      <Input
        label="Email"
        placeholder="name@email.com"
        value={email}
        onChange={setEmail}
        className="mb-3"
      />
      <Button
        type="submit"
        text="Join Waitlist"
        solid
        full
        primary
        className="mx-0"
        loading={loading}
        onClick={handleSubmit}
      />
      <div className="bg-gray-200 dark:bg-dark text-gray-500 py-3 px-4 text-center rounded text-sm flex mt-3">
        By join waitlist, you agree to Find Labs Privacy Policy and to receive news and updates.
      </div>
    </>
  )
}

JoinWaitlist.layout = "Auth"

export default JoinWaitlist
