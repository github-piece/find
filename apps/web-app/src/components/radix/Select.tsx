import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import classNames from "classnames";
import { useTheme } from "next-themes";
import Image from "next/image";
import { inputBaseClass } from "./Input";
import Label from "./Label";

type SelectProps = {
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

const Select = ({ className = "", placeholder = "" }) => {
  const { theme } = useTheme();
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger
        className={classNames(inputBaseClass, className, theme)}
        aria-label="Food"
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon className="ml-auto my-auto">
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content className="inline-flex items-center bg-white px-0 py-4 gap-2">
        <SelectPrimitive.ScrollUpButton>
          <ChevronUpIcon />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport>
          <SelectPrimitive.Item value="apple">
            <SelectPrimitive.ItemText>Apple</SelectPrimitive.ItemText>
            <SelectPrimitive.ItemIndicator>
              <CheckIcon />
            </SelectPrimitive.ItemIndicator>
          </SelectPrimitive.Item>
          <SelectPrimitive.Item value="banana">
            <SelectPrimitive.ItemText>Banana</SelectPrimitive.ItemText>
            <SelectPrimitive.ItemIndicator>
              <CheckIcon />
            </SelectPrimitive.ItemIndicator>
          </SelectPrimitive.Item>
          <SelectPrimitive.Item value="blueberry">
            <SelectPrimitive.ItemText>Blueberry</SelectPrimitive.ItemText>
            <SelectPrimitive.ItemIndicator>
              <CheckIcon />
            </SelectPrimitive.ItemIndicator>
          </SelectPrimitive.Item>
          <SelectPrimitive.Item value="grapes">
            <SelectPrimitive.ItemText>Grapes</SelectPrimitive.ItemText>
            <SelectPrimitive.ItemIndicator>
              <CheckIcon />
            </SelectPrimitive.ItemIndicator>
          </SelectPrimitive.Item>
          <SelectPrimitive.Item value="pineapple">
            <SelectPrimitive.ItemText>Pineapple</SelectPrimitive.ItemText>
            <SelectPrimitive.ItemIndicator>
              <CheckIcon />
            </SelectPrimitive.ItemIndicator>
          </SelectPrimitive.Item>
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton>
          <ChevronDownIcon />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
};

export default Select;
