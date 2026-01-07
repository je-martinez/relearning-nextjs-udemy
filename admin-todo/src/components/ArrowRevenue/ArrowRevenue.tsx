interface ArrowRevenueProps {
  percentage: number;
}

export const ArrowRevenue = ({ percentage }: ArrowRevenueProps) => {
  return (
    <>
      <div
        className={`flex items-end gap-1 ${
          percentage < 0 ? "text-red-500" : "text-green-500"
        }`}
      >
        <svg
          className={`w-3 ${percentage < 0 ? "rotate-180 mb-2" : ""}`}
          viewBox="0 0 12 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z"
            fill="currentColor"
          />
        </svg>
        <span
          className={`${percentage < 0 ? "text-red-500" : "text-green-500"}`}
        >
          {percentage}%
        </span>
      </div>
    </>
  );
};
