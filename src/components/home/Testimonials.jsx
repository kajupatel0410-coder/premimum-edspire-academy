import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Anshu",
      image: "/images/testimonials/anshu.jpg",
      course: "B.Tech | Delhi Technological University",
      text: "The academy gave me the confidence and clarity I needed to pursue engineering. Today, I can proudly say the guidance here helped shape my future.",
    },
    {
      name: "Ritik",
      image: "/images/testimonials/ritik.jpg",
      course: "B.Tech Aerospace Engineering | Amity University",
      text: "My journey from school to college was made possible by the strong foundation built at Edspire Academy. The teachers always encouraged me to aim higher.",
    },
    {
      name: "Amrita",
      image: "/images/testimonials/amrita.jpg",
      course: "Class XII | Govt. Co-Ed Sr. Sec. School",
      text: "The academy's support helped me prepare for my board examinations with confidence. Every class motivated me to perform better and achieve my goals.",
    },
    {
      name: "Harshita",
      image: "/images/testimonials/harshita.jpg",
      course: "Class X | Rainbow Sr. Sec. School",
      text: "Learning here is engaging and inspiring. The teachers make concepts easy to understand and help students develop confidence in every subject.",
    },
  ];

  return (
    <section className="py-24 bg-[#07142B]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-[#D4AF37] uppercase tracking-widest font-semibold">
            Student Success Stories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Success Stories & Student Experiences
          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
            Our students' achievements reflect the academic guidance,
            mentorship and learning environment that define
            Edspire Academy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {testimonials.map((student, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="flex items-center gap-5">

                <img
                  src={student.image}
                  alt={student.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-[#D4AF37]/20"
                />

                <div>
                  <h3 className="text-xl font-bold text-[#07142B]">
                    {student.name}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {student.course}
                  </p>
                </div>

              </div>

              <div className="flex gap-1 text-[#D4AF37] mt-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="mt-5 text-gray-700 leading-7 italic">
                "{student.text}"
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;