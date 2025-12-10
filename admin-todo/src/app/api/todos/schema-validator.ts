import * as yup from "yup";

export const createOrUpdateTodoSchema = yup.object({
  title: yup.string().min(1).required(),
  description: yup.string().min(1).required(),
  completed: yup.boolean().optional().default(false),
});

interface ValidateCreateOrUpdateTodoResponse {
  success: boolean;
  data: yup.InferType<typeof createOrUpdateTodoSchema> | null;
  message: string;
  errors: string[];
}

export const validateCreateOrUpdateTodo = async ({
  title,
  description,
  completed,
}: {
  title: string;
  description: string;
  completed: boolean;
}): Promise<ValidateCreateOrUpdateTodoResponse> => {
  try {
    const validatedBody = await createOrUpdateTodoSchema.validate({
      title,
      description,
      completed,
    });
    return {
      success: true,
      data: validatedBody,
      message: "Todo validated successfully",
      errors: [],
    };
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return {
        success: false,
        data: null,
        message: "Validation error",
        errors: (error as { errors: string[] }).errors,
      };
    }
    return {
      success: false,
      data: null,
      message: "An unexpected error occurred",
      errors: [],
    };
  }
};
