import classNames from 'classnames';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Label from './Label';
import ErrorIcon from '../../assets/icon/error.svg';

type InputProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  error?: string;
  value: string;
  onChange: (v: string) => void;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  icon?: any;
  onIconClick?: () => void;
};
('bg-transparent border border-solid  border-[#e8e8eb] dark:border-[#2c2c2c] rounded min-h-[42px]');
export const inputBaseClass =
  'flex form-control bg-transparent block w-full px-4 py-2 font-normal text-gray-700 dark:text-white bg-clip-padding border border-solid  border-[#e8e8eb] dark:border-[#2c2c2c] rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none min-h-[42px]';

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder = '',
  value,
  onChange,
  onKeyUp,
  className = '',
  inputClassName = '',
  labelClassName = '',
  error,
  errorClassName = '',
  icon,
  onIconClick,
}) => {
  const { theme } = useTheme();
  return (
    <div className={classNames(className, theme)}>
      {!!label && <Label text={label} className={classNames('text-left', labelClassName)} />}
      <div className="relative">
        <input
          type={type || 'string'}
          className={classNames(inputBaseClass, inputClassName, error && 'border-red-500')}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyUp={onKeyUp}
          placeholder={placeholder}
        />
        {!!icon && (
          <div className="absolute top-3 right-3 cursor-pointer" onClick={onIconClick}>
            <Image src={icon} width={16} height={16} alt="eye" />
          </div>
        )}
        {!icon && !!error && (
          <div className="absolute top-3 right-3 cursor-pointer">
            <Image src={ErrorIcon} width={16} height={16} alt="eye" />
          </div>
        )}
      </div>

      {error && (
        <p className={classNames('text-red-500 text-xs font-normal mt-[10px]', errorClassName)}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
