function Gallery() {
  const images = [
    {
      src: `${import.meta.env.BASE_URL}images/classroom/class1.jpg`,
      title: "Interactive Learning",
    },
    {
      src: `${import.meta.env.BASE_URL}images/classroom/class2.jpg`,
      title: "Academic Environment",
    },
    {
      src: `${import.meta.env.BASE_URL}images/classroom/class3.jpg`,
      title: "Student Engagement",
    },
    {
      src: `${import.meta.env.BASE_URL}images/classroom/class4.jpg`,
      title: "Classroom Excellence",
    },
    {
      src: `${import.meta.env.BASE_URL}images/classroom/class5.jpg`,
      title: "Future-Ready Learning",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-[#D4AF37] uppercase tracking-widest font-semibold">
            Academy Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#07142B] mt-4">
            Experience Life at Edspire Academy
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
            Explore our learning environment, classrooms, academic culture
            and the spaces where students grow with confidence and purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-[#07142B]">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;