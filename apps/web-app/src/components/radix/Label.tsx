import * as LabelPrimitive from '@radix-ui/react-label';
import classNames from 'classnames';

const Label: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => (
  <LabelPrimitive.Label
    className={classNames(
      'block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-2',
      className
    )}
  >
    {text}
  </LabelPrimitive.Label>
);

export default Label;
