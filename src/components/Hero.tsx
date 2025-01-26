import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="pt-20 min-h-[70vh] bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ankan Roychowdhury{" "}
              <span className="text-emerald-500">Senior Backend Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-8">
              Deep dives into system architecture, API design, and server-side
              optimization. Join me in exploring the backbone of modern
              applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#latestArticles"
                className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-medium transition-colors duration-300"
              >
                Latest Articles
              </a>
              <a
                href="#newsletter"
                className="px-8 py-3 border border-emerald-500 hover:bg-emerald-500/10 rounded-lg font-medium transition-colors duration-300"
              >
                Subscribe
              </a>
            </div>
          </div>

          {/* Right Section (Code Block) */}
          <div className="relative animate__animated animate__fadeInRight">
  <div className="absolute -inset-1">
    <div className="w-full h-full max-w-sm mx-auto lg:mx-0 bg-gradient-to-r from-emerald-500 to-blue-500 blur-3xl opacity-30"></div>
  </div>
  <div className="relative">
    <div className="w-full h-96 bg-neutral-800 rounded-xl flex items-center justify-center">
      <div className="text-4xl sm:text-5xl md:text-6xl font-mono text-emerald-500">
        <pre>{`{
  code: true,
  passion: '100%'
}`}</pre>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
