export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Tag */}
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full border text-gray-600">
            Tracking
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1437] leading-tight">
            Unlock The Full <br />
            Power of ShipX <br />
            Logistics
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-500 max-w-md">
            Track shipments, monitor vehicles, and analyze data—all from
            one smart dashboard. Ship X simplifies your logistics with
            full control and visibility
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <button className="bg-indigo-500 text-white px-8 py-4 rounded-full font-medium hover:bg-indigo-600 transition">
              Contact us →
            </button>

            <button className="border px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition">
              Get Started →
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="relative">
          {/* Image */}
          <img
            src="/images/about.jpg"
            alt="About"
            className="rounded-3xl w-full object-cover"
          />

          {/* Overlay Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-md rounded-2xl p-6 border">

            <p className="text-sm text-gray-700 mb-3">
              ● Improved Supply Chain
            </p>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold">25K</h3>
                <span className="inline-block mt-1 px-3 py-1 text-sm bg-gray-200 rounded-full">
                  +50%
                </span>
              </div>

              {/* Fake graph line */}
              <div className="w-28 h-10 relative">
                <div className="absolute inset-0 border-b-2 border-indigo-500 rounded-full" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
