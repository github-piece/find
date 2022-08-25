import { useEffect, useState } from "react"
import Button from "../components/Button";
import CheckIcon from "../assets/icon/check.svg"
import { z } from 'zod'
import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";
import Input from "../components/radix/Input";
import Image from "next/image";

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
    <div className="max-w-[600px] mx-auto w-full">
      <h1 className="font-semibold text-4xl mb-3">Join Waitlist</h1>
      <p className="text-gray-400 text-lg mb-4 font-semibold max-w-[480px] mx-auto">
        Experience the next generation of search, discovery, and exploration on the internet.
      </p>
      <div className="text-gray-700 text-sm mb-4 grid grid-cols-2 sm:grid-cols-4">
        <div className="flex mx-auto">
          <Image src={CheckIcon} alt="check" />
          <div>Privacy-first</div>
        </div>
        <div className="flex mx-auto">
          <Image src={CheckIcon} alt="check" />
          <div>Open-source</div>
        </div>
        <div className="flex mx-auto">
          <Image src={CheckIcon} alt="check" />
          <div>Ad-free</div>
        </div>
        <div className="flex mx-auto">
          <Image src={CheckIcon} alt="check" />
          <div>$5 a month</div>
        </div>
      </div>
      <div className="max-w-[480px] mx-auto">
        <div className="mb-3 mt-8">
          <Input
            label="Email"
            placeholder="name@email.com"
            value={email}
            onChange={setEmail}
          />
        </div>
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
        <div className="bg-gray-100 dark:bg-gray-100-dark text-gray-500 dark:text-gray-500-dark py-3 px-4 text-center rounded text-sm flex mt-3">
          By joining the waitlist, you agree to the Find Labs Privacy Policy and to receive news and updates. 
        </div>
      </div>
    </div>
  )
}

JoinWaitlist.layout = "Auth"

export default JoinWaitlist
