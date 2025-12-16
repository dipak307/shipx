import { Star, ArrowRight, CheckCircle, MapPin } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-b from-[#0b1026] to-[#0e1433] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-6 px-4 py-1 text-sm rounded-full border border-white/20">
            Testimonial
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            What Do Our <br /> Clients Say
          </h2>

          <p className="text-white/70 max-w-md mb-10">
            We make shipping simple with fast booking, real-time
            tracking, and secure, on-time delivery for every cargo
            across the globe
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center gap-3 bg-indigo-500 hover:bg-indigo-600 px-7 py-4 rounded-full font-medium transition">
              Contact us <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-7 py-4 rounded-full font-medium transition">
              Get Started <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT TESTIMONIAL CARDS */}
        <div className="relative flex gap-6 overflow-x-auto lg:overflow-visible pb-10">

          {/* CARD 1 */}
          <div className="min-w-[320px] bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/images/user1.jpg"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">Olivia Jonathan</h4>
                <p className="text-sm text-white/60">CEO at Shipzo</p>
              </div>
            </div>

            <div className="flex gap-1 mb-4 text-indigo-400">
              {[1, 2, 3, 4].map(i => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
              <Star size={16} className="opacity-30" />
            </div>

            <p className="text-white/80 text-sm leading-relaxed mb-6">
              “Ship X has completely changed the way we manage logistics.
              The platform is easy to use, and their tracking system
              keeps us updated at every step”
            </p>

            <div className="flex items-center justify-between text-sm text-white/70">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Mumbai <ArrowRight size={14} /> Delhi
              </div>

              <span className="flex items-center gap-1">
                <CheckCircle size={16} className="text-indigo-400" />
                Verified
              </span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="min-w-[320px] bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/images/user2.jpg"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">Marie Jane</h4>
                <p className="text-sm text-white/60">CFO at Movix</p>
              </div>
            </div>

            <div className="flex gap-1 mb-4 text-indigo-400">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            <p className="text-white/80 text-sm leading-relaxed mb-6">
              “Reliable, fast, and transparent. Ship X gives us complete
              control over our shipments worldwide.”
            </p>

            <div className="flex justify-end text-sm text-white/70">
              <span className="flex items-center gap-1">
                <CheckCircle size={16} className="text-indigo-400" />
                Verified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SLIDER INDICATOR */}
      <div className="mt-12 flex justify-center">
        <div className="w-28 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="w-1/2 h-full bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
