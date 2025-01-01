export default function Home() {
  return (
    <main className="flex grow justify-center bg-slate-100 dark:bg-slate-800">
      <div className="container mt-[calc(10vh+40px)] flex justify-center p-4">
        <div className="flex flex-col text-center dark:text-slate-100">
          <h1 className="text-5xl md:text-6xl">Hey, I'm Mike Garavani.</h1>
          <p className="mt-6 text-2xl md:text-3xl">
            Aspiring software engineer based in Switzerland.
          </p>
          <ul className=" mt-10 inline-flex justify-center gap-8"></ul>
          <h2 className="mb-1 mt-16 text-2xl">Projects</h2>
          <hr className="mx-auto mb-3 w-[20px] rounded-sm border-2 border-green-300" />
        </div>
      </div>
    </main>
  );
}
