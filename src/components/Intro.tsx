export default function Intro() {
  return (
    <section id="intro">
      <div className="container flex justify-start px-2 py-10">
        <div className="flex max-w-7xl flex-row items-start gap-5 px-4 sm:px-12">
          <div className="mt-5 flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-sky-700" />
            <div className="h-40 w-1 bg-stone-200 sm:h-80" />
          </div>
        </div>
        <div className="py-8">
          <h2 className="text-5xl font-medium text-white md:text-6xl">Brian Silver</h2>
          <h3 className="py-2 text-2xl md:text-3xl">Developer</h3>
          <p className="mx-auto max-w-xl py-4 leading-8 text-gray-400 md:text-xl">
            {/* Providing services for programming needs */}I make code go brrrrr
          </p>
          <div>{/* TODO: LinkedIn + Github */}</div>
        </div>
      </div>
    </section>
  );
}
