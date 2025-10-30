export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
      <section className="flex w-full justify-center mb-4 bg-gray-100 dark:bg-gray-900 py-8">
        <h1 className="text-2xl font-bold text-center bg-gray-100 dark:bg-gray-900 p-4">
          Hey look at me, I&apos;m in the layout inside the root layout, inside
          the (general) folder, which is a special folder that is used to group
          related pages together.
        </h1>
      </section>
      {children}
    </main>
  );
}
