function AdmissionsBanner() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#07142B] to-[#0E2A56]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* Left Side */}
            <div className="p-10 md:p-14">

              <span className="inline-block bg-[#D4AF37]/20 text-[#07142B] px-5 py-2 rounded-full font-semibold mb-5">
                Admissions Open 2026
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#07142B] leading-tight mb-6">
                Begin Your Academic Journey
                with Edspire Academy
              </h2>

              <p className="text-gray-600 text-lg leading-8 mb-8">
                Empowering learners through academic excellence,
                skill development and future-ready education.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">

                <div className="bg-gray-50 rounded-2xl p-4">
                  ✓ Classes I – XII
                </div>

                <div className="bg-gray-50 rounded-2xl p-4">
                  ✓ Higher Education Support
                </div>

                <div className="bg-gray-50 rounded-2xl p-4">
                  ✓ Spoken English
                </div>

                <div className="bg-gray-50 rounded-2xl p-4">
                  ✓ English Grammar
                </div>

                <div className="bg-gray-50 rounded-2xl p-4">
                  ✓ Vedic Mathematics
                </div>

                <div className="bg-gray-50 rounded-2xl p-4">
                  ✓ Personalised Guidance
                </div>

              </div>

              <div className="flex flex-wrap gap-4">

                <a
                  href="tel:9990194025"
                  className="bg-[#D4AF37] text-[#07142B] px-8 py-4 rounded-full font-bold hover:scale-105 transition"
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/919990194025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#07142B] text-[#07142B] px-8 py-4 rounded-full font-bold hover:bg-[#07142B] hover:text-white transition"
                >
                  WhatsApp Enquiry
                </a>

              </div>

            </div>

            {/* Right Side */}
            <div className="bg-[#07142B] text-white p-10 md:p-14 flex flex-col justify-center">

              <h3 className="text-3xl font-bold mb-6">
                Why Choose Edspire Academy?
              </h3>

              <div className="space-y-5">

                <div>
                  ✓ 16+ Years of Teaching Experience
                </div>

                <div>
                  ✓ Concept-Based Learning Approach
                </div>

                <div>
                  ✓ NEP-Aligned Educational Philosophy
                </div>

                <div>
                  ✓ Expert Academic Mentoring
                </div>

                <div>
                  ✓ Future-Ready Skill Development
                </div>

                <div>
                  ✓ Individual Attention & Progress Tracking
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AdmissionsBanner;