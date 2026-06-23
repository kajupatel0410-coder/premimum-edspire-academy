import {
  FaSchool,
  FaGraduationCap,
  FaLaptopCode,
  FaUniversity,
  FaBookReader,
  FaCalculator,
} from "react-icons/fa";

function Courses() {
  const courses = [
    {
      icon: <FaSchool />,
      title: "Foundation Programme",
      desc: "Classes I–V focused on strong fundamentals, numeracy, literacy, confidence building and joyful learning.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Academic Excellence Programme",
      desc: "Classes VI–XII with concept-based learning in Mathematics, Science, English and Social Sciences.",
    },
    {
      icon: <FaUniversity />,
      title: "Higher Education Support",
      desc: "Academic mentoring and subject guidance for BA, B.Com and B.Sc students.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Technical Education Support",
      desc: "Guidance for B.Tech, BCA, Diploma and Polytechnic students with strong conceptual foundations.",
    },
    {
      icon: <FaBookReader />,
      title: "Communication & Language Skills",
      desc: "Spoken English, English Grammar and communication skills for academic and personal growth.",
    },
    {
      icon: <FaCalculator />,
      title: "Vedic Mathematics",
      desc: "Speed calculations, logical thinking and mathematical confidence through proven Vedic techniques.",
    },
  ];

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-[#D4AF37] uppercase tracking-widest font-semibold">
            Academic Programmes
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#07142B] mt-4">
            Learning Pathways for Every Stage of Growth
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
            From foundational learning and academic excellence to future-ready
            skills, our programmes are designed to nurture confident, capable
            and successful learners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#07142B] flex items-center justify-center text-[#D4AF37] text-4xl mb-6 group-hover:scale-110 transition">
                {course.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#07142B] mb-4">
                {course.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {course.desc}
              </p>

              <div className="mt-6 w-16 h-1 bg-[#D4AF37] rounded-full"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Courses;