import { passwordStrength } from 'check-password-strength'
import classNames from 'classnames';
import { useEffect, useState } from 'react'

const PasswordChecker: React.FC<{ password: string }> = ({ password }) => {
  const [strength, setStrength] = useState({
    text: '',
    value: 0
  });
  useEffect(() => {
    setStrength({
      text: passwordStrength(password).value,
      value: passwordStrength(password).id
    })
  }, [password])
  return (
    <div className="flex justify-between my-4">
      <div className={classNames("w-full h-1 mr-2 my-auto", strength.value > 0 ? 'bg-[#00CDAE]' : 'bg-gray-100')} />
      <div className={classNames("w-full h-1 mr-2 my-auto", strength.value > 1 ? 'bg-[#00CDAE]' : 'bg-gray-100')} />
      <div className={classNames("w-full h-1 mr-2 my-auto", strength.value > 2 ? 'bg-[#00CDAE]' : 'bg-gray-100')} />
      <div className="text-sm text-gray-400 text-bold text-right whitespace-nowrap">{ strength.text }</div>
    </div>
  )
}

export default PasswordChecker