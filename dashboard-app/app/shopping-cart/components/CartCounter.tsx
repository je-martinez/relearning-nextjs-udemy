"use client";
import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [count, setCount] = useState(value);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-2 border-2 border-gray-300 rounded-md p-12">
      <span className="text-2xl font-bold">Cart Counter</span>
      <span className="text-4xl font-bold">{count}</span>
      <div className="flex flex-row items-center justify-center w-full gap-2">
        <Button onClick={increment}>+1</Button>
        <Button onClick={decrement}>-1</Button>
      </div>
    </div>
  );
};

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      className="bg-blue-900 w-13 h-10 text-white p-2 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
