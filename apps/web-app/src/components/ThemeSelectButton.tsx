import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSelectButton = () => {
  const { resolvedTheme: theme, setTheme } = useTheme();

  return (
    <div
      className="cursor-pointer my-auto mr-3 w-6 h-6"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <SunIcon className="w-full h-full dark:text-white" />
      ) : (
        <MoonIcon className="w-full h-full dark:text-white" />
      )}
    </div>
  );
};

export default ThemeSelectButton;
