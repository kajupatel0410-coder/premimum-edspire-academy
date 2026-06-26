export default function FounderTeam() {
  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-[#D4AF37] font-semibold uppercase tracking-widest">
            Leadership & Faculty
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#07142B] mt-3">
            Meet Our Expert Team
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Founder Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-16">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div className="p-8 flex justify-center">
              <img
                src={`${import.meta.env.BASE_URL}images/founder/founder.jpg`}
                alt="Vipin Patel"
                className="w-full max-w-md rounded-3xl shadow-lg object-cover"
              />
            </div>

            <div className="p-8">

              <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full font-semibold mb-4">
                Founder & Lead Educator
              </span>

              <h3 className="text-4xl font-bold text-[#07142B] mb-3">
                Vipin Patel
              </h3>

              <p className="text-lg font-medium text-gray-700 mb-4">
                B.Tech, GGSIPU Delhi
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                16+ years of teaching experience with a strong focus on
                concept-based learning, academic excellence, and student
                mentoring. Dedicated to building strong fundamentals and
                developing confident learners.
              </p>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-gray-50 rounded-xl p-5 text-center">
                  <h4 className="text-2xl font-bold text-[#07142B]">
                    16+
                  </h4>
                  <p className="text-gray-600">
                    Years Experience
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-5 text-center">
                  <h4 className="text-2xl font-bold text-[#07142B]">
                    Expert
                  </h4>
                  <p className="text-gray-600">
                    Teaching & Mentoring
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Expert Team */}
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-[#07142B]">
            Our Expert Team
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white border border-gray-100 rounded-3xl shadow-lg p-8">
            <div className="w-16 h-16 bg-[#07142B] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
              AK
            </div>

            <h4 className="text-2xl font-bold text-[#07142B] mb-2">
              Anu Kumari
            </h4>

            <p className="text-[#D4AF37] font-semibold mb-4">
              Curriculum Developer | Former KVS Faculty
            </p>

            <p className="text-gray-700 mb-2">
              B.El.Ed, B.Ed, M.A. Psychology
            </p>

            <p className="text-gray-700 mb-4">
              Diploma in Guidance & Counselling
            </p>

            <p className="text-gray-600 leading-relaxed">
              10+ years of experience. Specialist in child psychology,
              curriculum design, student development, and learner-centred
              educational planning.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl shadow-lg p-8">
            <div className="w-16 h-16 bg-[#07142B] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
              NK
            </div>

            <h4 className="text-2xl font-bold text-[#07142B] mb-2">
              Nitin Kumar
            </h4>

            <p className="text-[#D4AF37] font-semibold mb-4">
              Academic & Technical Advisor
            </p>

            <p className="text-gray-700 mb-2">
              Senior Software Engineer, Meta
            </p>

            <p className="text-gray-700 mb-4">
              Former Software Engineer, Google
            </p>

            <p className="text-gray-600 leading-relaxed">
              Bringing industry-level excellence, innovation, technology,
              and modern problem-solving approaches into academic planning
              and student development.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}