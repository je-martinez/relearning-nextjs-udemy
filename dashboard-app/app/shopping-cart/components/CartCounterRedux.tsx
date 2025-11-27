"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decrement, increment } from "@/store/counter/counterSlice";

export const CartCounterRedux = () => {
  const dispatch = useAppDispatch();
  const { value: count } = useAppSelector((state) => state.counter);

  const incrementCount = () => {
    dispatch(increment());
  };

  const decrementCount = () => {
    dispatch(decrement());
  };
  return (
    <div className="flex flex-col items-center justify-center gap-2 border-2 border-gray-300 rounded-md p-12">
      <span className="text-2xl font-bold">Cart Counter w/ Redux</span>
      <span className="text-4xl font-bold">{count}</span>
      <div className="flex flex-row items-center justify-center w-full gap-2">
        <Button onClick={incrementCount}>+1</Button>
        <Button onClick={decrementCount}>-1</Button>
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
