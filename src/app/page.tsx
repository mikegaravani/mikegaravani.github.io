// import Image from "next/image";
// import portfolioImage from "../assets/portfolio-pic.jpeg";

export default function Home() {
  return (
    <main className="flex grow justify-center bg-slate-700">
      <div className="container mx-auto mt-20 mb-10 flex justify-center p-4">
        <div className="flex flex-col text-center text-slate-200">
          <h1 className="text-5xl md:text-6xl">Hey, I&apos;m Mike Garavani.</h1>
          <p className="mt-6 text-xl md:text-2xl lg:text-3xl">
            Software developer based in Switzerland.
          </p>
          <h2 className="mb-1 mt-16 text-2xl">Projects</h2>
          <hr className="mx-auto w-8 rounded-sm border-2 border-green-300" />

          {/* PROJECT 1 */}
          <p className="text-xl mt-3">
            <a
              href="https://github.com/mikegaravani/connect-X-project"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Connect X player
            </a>
          </p>

          {/* PROJECT 2 */}
          <p className="text-xl">
            <a
              href="https://github.com/mikegaravani/tw-project"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <span className="underline">mCal</span>{" "}
              <span className="bg-green-300 text-black text-xs font-semibold px-2 py-0.5 rounded-md">
                WIP
              </span>
            </a>
          </p>

          {/* PROJECT 3 */}
          <p className="text-xl">
            <a
              href="https://github.com/mikegaravani/risk-odds"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Risk Odds
            </a>
          </p>

          {/* PROJECT 4 */}
          <p className="text-xl">
            <a
              href="https://github.com/mikegaravani/data-extractor-jpeg"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              JPEG Data Extractor
            </a>
          </p>

          <h2 className="mb-1 mt-16 text-2xl">Contact</h2>
          <hr className="mx-auto w-8 rounded-sm border-2 border-green-300" />

          <p className="text-xl mt-3">
            <a
              href="https://www.linkedin.com/in/michelegaravani/"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </p>

          <p className="text-xl">
            <a
              href="https://github.com/mikegaravani"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </p>

          <p className="text-xl">
            <a
              href="mailto:michele@garavani.ch"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              michele@garavani.ch
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
