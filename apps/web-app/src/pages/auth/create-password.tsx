import { useEffect, useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"

import Button from "../../components/Button"
import EyeIcon from "../../assets/icon/eye.svg"
import InfoIcon from "../../assets/icon/info.svg"
import Input from "../../components/radix/Input"

const CreatePassword = () => {
  const { data, status } = useSession()
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [type, setType] = useState('password')
  const [error, setError] = useState({
    password: '',
    confirm: ''
  })

  const handleType = () => setType(type === 'text' ? 'password' : 'text')
  const handleSubmit = () => {
    if (!password || password !== confirmPassword) {
      setError({
        password: password ? '' : 'Password is required',
        confirm: password !== confirmPassword ? 'Password doesn\'t match' : ''
      })
      return
    }
  }

  if (status === 'loading') return <></>
  
  return (
    <>
      <h1 className="font-semibold text-4xl mb-3">
        Create your Find master password
      </h1>
      <p className="text-gray-400 text-sm mb-12 font-semibold mb-8">
        Your master password is the only way to access Find. Keep this password secret, and do not share with others.
      </p>
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
      <div className="flex justify-between my-4">
        <div className="bg-gray-500 w-full h-1 mr-2 my-auto" />
        <div className="bg-gray-500 w-full h-1 mr-2 my-auto" />
        <div className="bg-gray-100 w-full h-1 mr-2 my-auto" />
        <div className="text-sm text-gray-400 w-full">Could be stronger</div>
      </div>
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
        className="mx-0"
        loading={false}
        onClick={handleSubmit}
      />
      <div className="bg-gray-200 text-gray-500 py-3 px-4 text-center rounded text-sm flex mt-3">
        <div className="w-8 h-8 mr-3 ml-auto mt-1">
          <Image src={InfoIcon} alt="information" />
        </div>
        <div className="mr-auto text-left">
          Be sure to save your Master Password securely. If you forget your Master Password, you won&apos;t be able to login. Find uses end-to-end encryption, so we can&apos;t reset your Master Password.
        </div>
      </div>
    </>
  )
}

CreatePassword.layout = "Auth"

export default CreatePassword