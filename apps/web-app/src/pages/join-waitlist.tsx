import { useState } from "react"
import Button from "../components/Button";
import SocialLogin from "../components/SocialLogin"
import { z } from 'zod'

const JoinWaitlist = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true)
    try {
      if (z.string().email().parse(email)) {
        console.log('email', email)
      }
    } catch {
      console.log('failed', email)
    }
    setLoading(false)
  }

  return (
    <>
      <h1 className="font-semibold text-4xl mb-3">Join Waitlist</h1>
      <p className="text-gray-400 text-sm mb-4 font-semibold">
        Start now and manage tabs, bookmarks, your browser history, perform all sorts of actions and more.
      </p>
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
        By join waitlist, you agree to Find Terms of Use, Privacy Plicy and to receive news and updates.
      </div>
    </>
  )
}

JoinWaitlist.layout = "Auth"

export default JoinWaitlist
