function Stats() {
  const stats = [
    {
      number: "16+",
      title: "Years of Teaching Experience",
    },
    {
      number: "100+",
      title: "Students Guided",
    },
    {
      number: "NEP",
      title: "Aligned Curriculum",
    },
    {
      number: "100%",
      title: "Student-Centric Learning",
    },
  ];

  return (
    <section className="py-20 bg-[#07142B]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-[#D4AF37] uppercase tracking-widest font-semibold">
            Our Impact
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold mt-3">
            Building Future Achievers
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-[#D4AF37] text-5xl font-bold mb-4">
                {item.number}
              </h3>

              <p className="text-white">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;