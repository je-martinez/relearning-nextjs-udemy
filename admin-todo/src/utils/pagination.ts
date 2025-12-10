import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE } from "@/constants";

export const generatePagination = (
  total: number,
  page: number,
  pageSize: number
) => {
  return {
    currentPage: Number(page),
    pageSize: Number(pageSize),
    total,
    totalPages: Math.ceil(total / Number(pageSize)),
    hasNextPage: Number(page) < Math.ceil(total / Number(pageSize)),
  };
};

export const convertPageAndPageSizeToNumbers = (
  page: number,
  pageSize: number
) => {
  return {
    page: isNaN(Number(page)) ? DEFAULT_PAGE : Number(page),
    pageSize: Math.min(
      isNaN(Number(pageSize)) ? DEFAULT_PAGE_SIZE : Number(pageSize),
      MAX_PAGE_SIZE
    ),
  };
};

const validatePageAndPageSize = (page: number, pageSize: number) => {
  return {
    page: page < 1 ? DEFAULT_PAGE : page,
    pageSize: pageSize < 1 ? DEFAULT_PAGE_SIZE : pageSize,
  };
};

export const getSkipAndTake = (page: number, pageSize: number) => {
  const { page: validatedPage, pageSize: validatedPageSize } =
    validatePageAndPageSize(page, pageSize);
  return {
    skip: (validatedPage - 1) * validatedPageSize,
    take: validatedPageSize,
  };
};
