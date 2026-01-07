import { ArrowRevenue } from "@/components";

export default function DashboardPage() {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-2 lg:col-span-1">
          <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
            <div>
              <h5 className="text-xl text-gray-600 text-center">
                Global Activities
              </h5>
              <div className="mt-2 flex justify-center gap-4">
                <h3 className="text-3xl font-bold text-gray-700">$23,988</h3>
                <ArrowRevenue percentage={2} />
              </div>
              <span className="block text-center text-gray-500">
                Compared to last week $13,988
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
