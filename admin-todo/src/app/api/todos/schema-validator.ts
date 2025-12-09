import * as yup from "yup";

export const createOrUpdateTodoSchema = yup.object({
  title: yup.string().min(1).required(),
  description: yup.string().min(1).required(),
  completed: yup.boolean().default(false).required(),
});
