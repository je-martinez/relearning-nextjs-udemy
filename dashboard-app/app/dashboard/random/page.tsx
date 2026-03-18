import { cacheLife } from "next/cache";
import { connection } from "next/server";
import { Suspense } from "react";

export default async function RandomPage() {
  "use cache";

  cacheLife({
    stale: 5, // time in seconds to consider the cache obsolete,
    revalidate: 10, // time in seconds to revalidate the cache
    expire: 10, // time in seconds to expire the cache
  })
  

  // Non-deterministic operations
  const random = Math.random();
  const now = Date.now();
  const date = new Date();
  const uuid = crypto.randomUUID();
  const bytes = crypto.getRandomValues(new Uint8Array(16));

  return (
    <div className="text-black p-4">
      <p>{random}</p>
      <p>{now}</p>
      <p>{date.getTime()}</p>
      <p>{uuid}</p>
      <p>{bytes}</p>
    </div>
  );
}
