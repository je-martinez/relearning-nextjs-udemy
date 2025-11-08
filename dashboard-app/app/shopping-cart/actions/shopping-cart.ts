"use server";
import { z, ZodError } from "zod";

const cartCounterFormDataSchema = z.object({
  count: z.coerce.number(),
  action: z.enum(["increase", "decrease"]),
  value: z.coerce.number(),
});

export const handleAmountChange = async (
  initalState: unknown,
  request: FormData
) => {
  const initalStateObject = initalState as {
    message: string;
    error: ZodError | undefined;
    count: number;
    value: number;
    action: "increase" | "decrease";
  };

  const input = {
    count: request.get("count"),
    action: request.get("action"),
    value: request.get("value"),
  };

  const { success, data, error } = cartCounterFormDataSchema.safeParse(input);

  if (!success) {
    return {
      message: "Invalid request",
      error: z.flattenError(error),
      count: initalStateObject.count,
      value: initalStateObject.value,
      action: initalStateObject.action,
    };
  }

  const { action, count, value } = data;

  console.log({ action, count, value });

  if (action === "increase") {
    return {
      message: "Increase successful",
      count: count + value,
      value,
      action,
    };
  }

  if (action === "decrease") {
    return {
      message: "Decrease successful",
      count: count - value,
      value,
      action,
    };
  }
};
