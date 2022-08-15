import classNames from 'classnames';
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
}

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
  errorClassName = ""
}) => (
  <div className={className}>
    {!!label && <Label text={label} className={labelClassName} />}
    <input
      type={type || "string"}
      className={classNames(
        "form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
        inputClassName
      )}
      value={value}
      onChange={e => onChange(e.target.value)}
      onKeyUp={onKeyUp}
      placeholder={placeholder}
    />
    {error && <p className={classNames("text-red-500 text-xs italic", errorClassName)}>{error}</p>}
  </div>
)

export default Input