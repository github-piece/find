import * as LabelPrimitive from '@radix-ui/react-label';

type InputProps = {
  label?: string
  placeholder?: string
}

const Input: React.FC<InputProps> = ({ label, placeholder = "" }) => (
  <div className="">
    {!!label && <label className="block text-gray-700 text-sm font-bold mb-2">
      {label}
    </label>}
    <input
      type="string"
      className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      placeholder={placeholder} />
    <p className="text-red-500 text-xs italic">Please choose a password.</p>
  </div>
)

export default Input