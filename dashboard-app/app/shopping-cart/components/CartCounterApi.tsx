"use client";
import { useEffect, useState } from "react";

const getCounterAsApiCall = async () => {
  const response = await fetch("/api/counter");
  const data = await response.json();
  return data.count;
};

const incrementCounterAsApiCall = async () => {
  const response = await fetch("/api/counter", {
    method: "POST",
    body: JSON.stringify({ action: "increase", count: 1, value: 1 }),
  });
  const data = await response.json();
  return data.count;
};

const decrementCounterAsApiCall = async () => {
  const response = await fetch("/api/counter", {
    method: "POST",
    body: JSON.stringify({ action: "decrease", count: 1, value: 1 }),
  });
  const data = await response.json();
  return data.count;
};

export const CartCounterApi = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getCounterAsApiCall().then((count) => {
      setCount(count);
    });
  }, []);

  const increment = () => {
    incrementCounterAsApiCall().then((count) => {
      setCount(count);
    });
  };

  const decrement = () => {
    decrementCounterAsApiCall().then((count) => {
      setCount(count);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 border-2 border-gray-300 rounded-md p-12">
      <span className="text-2xl font-bold">Cart Counter (API)</span>
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
