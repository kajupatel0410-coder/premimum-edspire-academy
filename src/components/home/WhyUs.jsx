import {
  FaBookOpen,
  FaBrain,
  FaUserGraduate,
  FaClipboardCheck,
  FaShieldAlt,
  FaChalkboardTeacher,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";

function WhyUs() {
  const features = [
    {
      icon: <FaBookOpen />,
      title: "Concept-Based Learning",
      desc: "Building strong fundamentals through understanding, application and analytical thinking.",
    },
    {
      icon: <FaBrain />,
      title: "Child-Centred Approach",
      desc: "Teaching strategies designed around how learners develop confidence and understanding.",
    },
    {
      icon: <FaUserGraduate />,
      title: "NEP-Aligned Education",
      desc: "Modern educational practices inspired by the National Education Policy framework.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Progress Monitoring",
      desc: "Regular assessments, reports and academic feedback to ensure continuous growth.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Learning Environment",
      desc: "A disciplined, respectful and student-focused environment that supports learning.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Academic Leadership",
      desc: "Experienced educators committed to academic excellence and student success.",
    },
    {
      icon: <FaChartLine />,
      title: "Future-Ready Skills",
      desc: "Developing communication, problem-solving and critical thinking for long-term success.",
    },
    {
      icon: <FaLightbulb />,
      title: "Personalised Guidance",
      desc: "Individual attention and mentoring to help every learner achieve their potential.",
    },
  ];

  return (
    <section className="py-24 bg-[#07142B]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-[#D4AF37] uppercase tracking-widest font-semibold">
            Why Choose Edspire Academy
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Excellence in Education, Mentorship & Student Development
          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
            Empowering learners through academic excellence,
            personalised mentoring and future-ready education.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-[#D4AF37] text-4xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-white text-xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyUs;