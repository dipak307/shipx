export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url(/images/hero.jpg)" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">

        {/* Hero Tag */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
          <img src="/images/hero1.jpg" className="w-4 h-4" alt="" />
          <span className="text-sm">Hero</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          STAY AHEAD <br className="hidden sm:block" />
          IN SHIPPING AND LOGISTICS
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl sm:max-w-2xl text-white/80 text-sm sm:text-base">
          Discover key insights and trends to enhance your shipping
          strategies and stay competitive
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button className="bg-indigo-500 px-8 py-4 rounded-full font-medium hover:bg-indigo-600 transition">
            Contact us →
          </button>

          <button className="bg-white/10 backdrop-blur px-8 py-4 rounded-full font-medium hover:bg-white/20 transition">
            Play Video →
          </button>
        </div>
      </div>

      {/* Floating Brand Logos (Desktop only) */}
      <img
        src="/images/myntra.jpg"
        className="hidden lg:block absolute top-1/3 right-10 w-16 rounded-full"
      />
      <img
        src="/images/adidas.jpg"
        className="hidden lg:block absolute bottom-1/3 right-24 w-16 rounded-full"
      />
      <img
        src="/images/hm.jpg"
        className="hidden lg:block absolute top-1/3 left-10 w-16 rounded-full"
      />
      <img
        src="/images/lego.jpg"
        className="hidden lg:block absolute bottom-1/4 left-20 w-16 rounded-full"
      />
      <img
        src="/images/tata.jpg"
        className="hidden lg:block absolute bottom-16 left-1/2 -translate-x-1/2 w-16 rounded-full"
      />
    </section>
  );
}
