import { ArrowRevenue } from "@/components";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/auth-options";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <WelcomeLoggedInUser session={session} />
        <div className="md:grid-cols-2 lg:grid-cols-1">
          <div className="max-w-full max-h-96 p-8 space-y-6 rounded-xl border border-gray-200 bg-white">
            <div className="flex flex-col gap-2 w-full h-full">
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

export const WelcomeLoggedInUser = async ({
  session,
}: {
  session: Session | null;
}) => {
  if (!session) {
    return redirect("/api/auth/signin");
  }
  const { user } = session;
  return (
    <div className="max-w-full max-h-96 p-8 space-y-6 rounded-xl border border-gray-200 bg-white">
      <div className="flex flex-col gap-2 w-full h-full">
        <h5 className="text-xl text-gray-600 text-center">Welcome Back!</h5>
        <div className="flex justify-center gap-4">
          <h3 className="text-3xl font-bold text-gray-700">{user?.name}</h3>
        </div>
        <div className="flex justify-center gap-4">
          <Image
            src={user?.image ?? ""}
            alt={user?.name ?? ""}
            width={400}
            height={400}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <span className="block text-center text-gray-500">{user?.email}</span>
      </div>
    </div>
  );
};
