import * as React from "react";
export const Button = function Button(props: ButtonProps) {
  return <button>{props.name}</button>;
};

interface ButtonProps {
  name: string;
}
