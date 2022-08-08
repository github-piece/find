import { useEffect, useState } from "react"
import Button from "../../components/Button"
import EyeIcon from "../../assets/icon/eye.svg"
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const EnterPassword = () => {
  const { data, status } = useSession()
  console.log(data, status)
  const router = useRouter()
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('password')

  const handleType = () => setType(type === 'text' ? 'password' : 'text')
  const handleSubmit = () => { }

  useEffect(() => {
    if (status === 'unauthenticated') 
      router.push('/login')
  }, [status])

  return (
    <>
      <h1 className="font-semibold text-4xl mb-3">
        Enter your Find master password
      </h1>
      <p className="text-gray-400 text-sm mb-12 font-semibold mb-8">
        This action is protected. To continue, please enter your master password to verify your identity
      </p>
      <div className="flex flex-wrap mb-3">
        <div className="w-full text-left">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={type}
              placeholder="Enter your Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            <div className="absolute top-3 right-3 cursor-pointer" onClick={handleType}>
              <Image src={EyeIcon} width={16} height={16} />
            </div>
          </div>
          <div className="text-red-500 text-sm font-medium">
          </div>
        </div>
      </div>
      <div className="mb-6 text-gray-500 text-sm flex">
        <label className="block font-bold">
          <input className="mr-2 leading-tight" type="checkbox" />
          <span>Keep me logged in</span>
        </label>
      </div>
      <Button
        type="submit"
        text="Log in"
        solid
        full
        className="mx-0"
        loading={loading}
        onClick={handleSubmit}
      />
    </>
  )
}

EnterPassword.layout = "Auth"

export default EnterPassword