"use client";
import { useActionState } from "react";
import { handleAmountChange } from "../actions";

interface Props {
  value?: number;
}

const initialState = {
  count: 0,
  value: 0,
  action: "increase",
  message: "",
  error: undefined,
};

export const CartCounterForServer = ({ value = 0 }: Props) => {
  const [state, formAction, isPending] = useActionState(handleAmountChange, {
    count: value,
    value: 0,
    action: "increase",
    message: "",
    error: undefined,
  });

  return (
    <form
      action={formAction}
      className="flex flex-col items-center justify-center gap-2 border-2 border-gray-300 rounded-md p-12"
    >
      <span className="text-2xl font-bold">{state?.action}</span>
      <label htmlFor="count">Count</label>
      <input
        className="w-full border-2 border-gray-300 rounded-md p-2"
        type="number"
        name="count"
        id="count"
        defaultValue={state?.count}
        readOnly
      />
      <label htmlFor="action">Action</label>
      <select
        key={state?.action}
        className="w-full border-2 border-gray-300 rounded-md p-2"
        name="action"
        id="action"
        defaultValue={state?.action}
        disabled={isPending}
      >
        <option value="increase">Increase</option>
        <option value="decrease">Decrease</option>
      </select>
      <label htmlFor="value">Value</label>
      <input
        className="w-full border-2 border-gray-300 rounded-md p-2"
        type="number"
        name="value"
        id="value"
        defaultValue={state?.value}
      />
      <button
        className="bg-blue-900 w-full text-white p-2 rounded-md"
        type="submit"
      >
        Submit
      </button>
      {/* <span className="text-4xl font-bold">{count}</span> */}
      {/* <div className="flex flex-row items-center justify-center w-full gap-2">
        <Button onClick={increment}>+1</Button>
        <Button onClick={decrement}>-1</Button>
      </div> */}
    </form>
  );
};
