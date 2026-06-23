function LearningEcosystem() {
  const ecosystem = [
    {
      title: "Concept-Based Learning",
      description:
        "Strong focus on understanding concepts rather than rote memorisation.",
    },
    {
      title: "Regular Assessments",
      description:
        "Periodic tests and evaluations to track progress and identify gaps.",
    },
    {
      title: "Individual Attention",
      description:
        "Personalised guidance tailored to each student's learning needs.",
    },
    {
      title: "Parent Communication",
      description:
        "Regular updates and discussions to ensure collaborative growth.",
    },
    {
      title: "Academic Excellence",
      description:
        "Building confidence, discipline, and outstanding academic results.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-[#D4AF37] uppercase tracking-widest font-semibold">
            Learning Ecosystem
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#07142B] mt-3">
            Our Teaching Methodology
          </h2>

        </div>

        <div className="grid md:grid-cols-5 gap-6">

          {ecosystem.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#07142B] text-white flex items-center justify-center mx-auto mb-5 font-bold">
                {index + 1}
              </div>

              <h3 className="text-xl font-bold text-[#07142B] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default LearningEcosystem;