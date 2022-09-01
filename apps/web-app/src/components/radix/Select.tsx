import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import classNames from "classnames";
import { useTheme } from "next-themes";
import { inputBaseClass } from "./Input";
import Label from "./Label";

type SelectProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
};

const Select: React.FC<SelectProps> = ({
  label,
  className = "",
  placeholder = "",
  inputClassName = "",
  labelClassName = "",
  value = "",
  onChange,
  options = [],
}) => {
  const { theme } = useTheme();
  return (
    <div className={classNames(className, theme)}>
      {!!label && (
        <Label
          text={label}
          className={classNames("text-left", labelClassName)}
        />
      )}
      <SelectPrimitive.Root onValueChange={onChange} defaultValue={value}>
        <SelectPrimitive.Trigger
          className={classNames(inputBaseClass, inputClassName)}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon className="ml-auto my-auto">
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className="bg-white py-4 px-0 gap-2 shadow z-50 rounded-lg w-fit mx-auto">
            <SelectPrimitive.ScrollUpButton>
              <ChevronUpIcon />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport className="p-1">
              {options.map(({ value, label }) => (
                <SelectPrimitive.Item
                  key={value}
                  value={value}
                  className="flex items-center relative rounded-sm px-12 hover:bg-gray-100 w-full outline-0"
                >
                  <SelectPrimitive.ItemText>{label}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator className="absolute w-6 items-center justify-center left-0">
                    <CheckIcon />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton>
              <ChevronDownIcon />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </div>
  );
};

export default Select;
