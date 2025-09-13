// app/components/intro.tsx
import Image from "next/image";

export default function Intro() {
  return (
    <div className="relative flex items-center justify-center h-[70vh] md:h-[600px] w-full overflow-hidden">
      {/* Background Image with higher opacity and blur for better text readability */}
      <Image
        src="/backgroundIntro.jpg"
        alt="Construction site overview"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="z-0 opacity-70 blur-sm" // Increased opacity, added blur
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60 z-10"></div>

      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          {" "}
          {/* Larger, bolder text */}
          Building Dreams into Reality <br /> in Sydney
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          nProbFix Construction delivers unparalleled quality and expertise for
          all your building, renovation, and commercial needs.
        </p>
        <a
          href="/contact" // Link directly to your contact page
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105" // Prominent button
        >
          Get a Free Quote
        </a>
      </div>
    </div>
  );
}
