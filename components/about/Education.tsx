"use client";

export default function Education() {
  return (
    <section>
      <h3 className=" text-3xl font-semibold mb-8">Education</h3>

      <div className=" group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-8 max-w-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] ">
        <div className=" absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 " />

        <div className="relative z-10">
          <div className=" text-cyan-400 text-sm mb-3">Mar 2014 - Apr 2018</div>
        </div>

        <div className="flex items-center gap-6">
          {/* University Logo */}
          <div className=" w-20 h-20 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 ">
            <img
              src="/images/university-logo.png"
              alt="University of São Paulo logo"
              className=" w-14 h-14 object-contain "
            />
          </div>

          {/* University Information */}
          <div>
            <h4 className=" text-2xl font-semibold ">
              University of São Paulo (USP)
            </h4>

            <p className="mt-2 text-gray-400 ">
              Bachelor’s Degree in Computer Science
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
