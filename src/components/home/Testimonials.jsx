import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Anshu",
      image: `${import.meta.env.BASE_URL}images/testimonials/anshu.jpg`,
      course: "B.Tech | Delhi Technological University",
      text: "The academy gave me the confidence and clarity I needed to pursue engineering. Today, I can proudly say the guidance here helped shape my future.",
    },
    {
      name: "Ritik",
      image: `${import.meta.env.BASE_URL}images/testimonials/ritik.jpg`,
      course: "B.Tech Aerospace Engineering | Amity University",
      text: "My journey from school to college was made possible by the strong foundation built at Edspire Academy. The teachers always encouraged me to aim higher.",
    },
    {
      name: "Amrita",
      image: `${import.meta.env.BASE_URL}images/testimonials/amrita.jpg`,
      course: "Class XII | Govt. Co-Ed Sr. Sec. School",
      text: "The academy's support helped me prepare for my board examinations with confidence. Every class motivated me to perform better and achieve my goals.",
    },
    {
      name: "Harshita",
      image: `${import.meta.env.BASE_URL}images/testimonials/harshita.jpg`,
      course: "Class X | Rainbow Sr. Sec. School",
      text: "Learning here is engaging and inspiring. The teachers make concepts easy to understand and help students develop confidence in every subject.",
    },
  ];

  return (
    <section className="py-24 bg-[#07142B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((student, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-5">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3>{student.name}</h3>
                  <p>{student.course}</p>
                </div>
              </div>

              <div className="flex gap-1 mt-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="mt-4">"{student.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;