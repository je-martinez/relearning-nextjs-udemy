"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const backgroundImage =
    "url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23f0b608' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23e6d710' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23e7af05' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23e7d808' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d8a408' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23f1e213' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23f0b607' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23e4d506' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23eab822' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23e8da14' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23e8b008' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23edde14' points='943 900 1210 900 971 687'/%3E%3C/svg%3E)";

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-indigo-500 bg-fixed bg-cover bg-bottom"
      style={{ backgroundImage }}
    >
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl text-gray-50 text-center -mt-52">
            <div className="relative">
              <h1
                className="relative text-9xl font-sans font-bold"
                style={{
                  letterSpacing: "-0.75rem",
                  textShadow: "-8px 0 0 rgb(102 123 242)",
                }}
              >
                <span>E</span>
                <span>r</span>
                <span>r</span>
                <span>o</span>
                <span>r</span>
                <span>s</span>
                <span>!</span>
              </h1>
              <span className="absolute top-0 -ml-12 text-gray-300 font-semibold">
                Oops!
              </span>
            </div>
            <h5 className="text-gray-300 font-semibold -mr-10 -mt-3">
              Something went wrong
            </h5>
            <p className="text-gray-100 mt-2 mb-6">
              We are sorry, but an error occurred while loading this page:{" "}
              <br />
              <div className="text-gray-100 font-semibold border border-gray-100 p-4 rounded-md mt-12">
                <span className="text-gray-100 font-semibold whitespace-pre-wrap">
                  {error.message}
                </span>
              </div>
            </p>
            <button
              onClick={reset}
              className="bg-green-400 px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg cursor-pointer"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
