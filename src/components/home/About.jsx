function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-[#D4AF37] uppercase tracking-widest font-semibold">
            About Edspire Academy
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#07142B] mt-4 leading-tight">
            Academic Excellence,
            <br />
            Skill Development & Future Readiness
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
            Nurturing confident learners through concept-based education,
            personalised attention and a future-focused learning environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="/images/classroom/class3.jpg"
              alt="Edspire Academy Classroom"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>

          <div>

            <p className="text-lg text-gray-700 leading-8">
              At Edspire Academy, we believe education should inspire curiosity,
              build confidence and develop lifelong learning skills. Our mission
              is to create a nurturing academic environment where every learner
              receives the guidance needed to reach their full potential.
            </p>

            <p className="text-lg text-gray-700 leading-8 mt-6">
              Guided by the principles of the National Education Policy (NEP),
              our approach integrates concept-based learning, critical thinking,
              communication skills and personalised mentoring to support holistic
              development.
            </p>

            <p className="text-lg text-gray-700 leading-8 mt-6">
              From foundational learning in Classes I–V to academic excellence
              in Classes VI–XII, higher education support, technical education,
              Vedic Mathematics and language development programmes, we provide
              structured pathways for every stage of growth.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="bg-gray-100 rounded-2xl p-5">
                <h3 className="font-bold text-[#07142B]">
                  NEP-Aligned Learning
                </h3>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5">
                <h3 className="font-bold text-[#07142B]">
                  Personalised Attention
                </h3>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5">
                <h3 className="font-bold text-[#07142B]">
                  Concept-Based Teaching
                </h3>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5">
                <h3 className="font-bold text-[#07142B]">
                  Future-Ready Skills
                </h3>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;