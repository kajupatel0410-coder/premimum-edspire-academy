function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(7,20,43,0.82), rgba(7,20,43,0.82)), url('/images/classroom/class5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">

          <p className="text-[#D4AF37] uppercase tracking-[5px] font-semibold mb-4">
            Edspire Academy
          </p>

          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6">
            Empowering Every Learner
            <br />
            From Foundation to Future
          </h1>

          <p className="text-xl text-gray-200 leading-8 max-w-3xl mb-10">
            Academic Excellence • Skill Development • Future Readiness
            <br />
            NEP-Aligned Learning • Concept-Based Education • Personalised Guidance
          </p>

          <div className="flex flex-wrap gap-4 mb-12">

            <a
              href="#courses"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              Explore Programmes
            </a>

            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition"
            >
              Book a Free Consultation
            </a>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">

            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <h3 className="text-[#D4AF37] text-3xl font-bold">
                16+
              </h3>

              <p className="text-white mt-2">
                Years of Teaching Experience
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <h3 className="text-[#D4AF37] text-3xl font-bold">
                NEP
              </h3>

              <p className="text-white mt-2">
                Aligned Educational Approach
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <h3 className="text-[#D4AF37] text-3xl font-bold">
                100%
              </h3>

              <p className="text-white mt-2">
                Student-Centric Learning
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;

