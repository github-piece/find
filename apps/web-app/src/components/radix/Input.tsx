import classNames from 'classnames';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Label from './Label';

type InputProps = {
  label?: string
  placeholder?: string
  type?: string
  error?: string
  value: string
  onChange: (v: string) => void
  className?: string
  inputClassName?: string
  labelClassName?: string
  errorClassName?: string
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  icon?: any
  onIconClick?: () => void
}

export const inputBaseClass = "form-control bg-transparent block w-full px-4 py-2 font-normal text-gray-700 focus:bg-white bg-clip-padding border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder = "",
  value,
  onChange,
  onKeyUp,
  className = "",
  inputClassName = "",
  labelClassName = "",
  error,
  errorClassName = "",
  icon,
  onIconClick
}) => {
  const { theme } = useTheme()
  return (
    <div className={classNames(className, theme)}>
      {!!label && <Label text={label} className={classNames("text-left", labelClassName)} />}
      <div className="relative">
        <input
          type={type || "string"}
          className={classNames(
            inputBaseClass,
            inputClassName
          )}
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyUp={onKeyUp}
          placeholder={placeholder}
        />
        {!!icon && <div className="absolute top-3 right-3 cursor-pointer" onClick={onIconClick}>
          <Image src={icon} width={16} height={16} alt="eye" />
        </div>}
      </div>
      
      {error && <p className={classNames("text-red-500 text-sm font-medium", errorClassName)}>{error}</p>}
    </div>
  )
}

export default Input