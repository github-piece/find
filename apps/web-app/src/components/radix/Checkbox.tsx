import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import Label from './Label';

const Checkbox: React.FC<{ label?: string }> = ({ label }) => (
  <div className="flex">
    <CheckboxPrimitive.Root className='form-check-input appearance-none h-4 my-auto w-4 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left'>
      <CheckboxPrimitive.Indicator>
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {label && <Label text={label} className='ml-2 mt-auto mb-auto' />}
  </div>
)

export default Checkbox
