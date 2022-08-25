import { FormEvent, useEffect, useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"

import Button from "../../components/Button"
import EyeIcon from "../../assets/icon/eye.svg"
import InfoIcon from "../../assets/icon/info.svg"
import Input from "../../components/radix/Input"
import PasswordChecker from "../../components/PasswordChecker"
import { useRouter } from "next/router"

const CreatePassword = () => {
  const { status } = useSession()
  const router = useRouter()
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [type, setType] = useState('password')
  const [error, setError] = useState({
    password: '',
    confirm: ''
  })

  const handleType = () => setType(type === 'text' ? 'password' : 'text')
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!password || password !== confirmPassword) {
      setError({
        password: password ? '' : 'Password is required',
        confirm: password !== confirmPassword ? 'Password doesn\'t match' : ''
      })
      return
    }
  }

  useEffect(() => {
    if (status === 'unauthenticated') 
      router.push('/join')
  }, [status, router])

  if (status !== 'authenticated') return <></>
  
  return (
    <div className="max-w-lg mx-auto w-full">
      <h1 className="font-semibold text-4xl mb-3">
        Create your Find master password
      </h1>
      <p className="text-gray-400 text-sm mb-12 font-semibold mb-8">
        Your master password is the only way to access your Find account. It&apos;s used to end-to-end encrypt your private data. Use a strong password and keep it a secret.
      </p>
      <form onSubmit={handleSubmit}>
        <Input
          className="w-full text-left mb-3"
          label="Password"
          type={type}
          value={password}
          onChange={setPassword}
          placeholder="Enter your Password"
          icon={EyeIcon}
          onIconClick={handleType}
        />
        <PasswordChecker password={password} />
        <Input
          className="w-full text-left mb-8"
          label="Confirm Password"
          type={type}
          value={password}
          onChange={setConfirmPassword}
          placeholder="Enter your Password"
          icon={EyeIcon}
          onIconClick={handleType}
        />
        <Button
          type="submit"
          text="Submit"
          solid
          full
          primary
          className="mx-0"
          loading={false}
        />
      </form>
      <div className="bg-gray-100 dark:bg-gray-100-dark text-gray-500 dark:text-gray-500-dark py-3 px-4 text-center rounded text-sm flex mt-3">
        <div className="w-8 h-8 mr-3 ml-auto mt-1">
          <Image src={InfoIcon} alt="information" />
        </div>
        <div className="mr-auto text-left">
          Be sure to save your Master Password securely. If you forget your Master Password, you won&apos;t be able to login. Find uses end-to-end encryption, so we can&apos;t reset your Master Password.
        </div>
      </div>
    </div>
  )
}

CreatePassword.layout = "Auth"

export default CreatePassword