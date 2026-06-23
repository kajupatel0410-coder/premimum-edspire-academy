import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#07142B] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-[#D4AF37] uppercase tracking-widest font-semibold">
            Admissions & Enquiries
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Begin Your Learning Journey with Edspire Academy
          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
            Connect with our academic team for programme guidance,
            admissions support and free demo class enquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="space-y-8">

            <div className="flex gap-5">
              <FaMapMarkerAlt className="text-[#D4AF37] text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-2">
                  Main Academic Centre
                </h3>

                <p className="text-gray-300 leading-7">
                  RZ G-58, Sitapuri Part-2,
                  Gali No. 2, Near Mother Dairy,
                  New Delhi – 110045
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <FaMapMarkerAlt className="text-[#D4AF37] text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-2">
                  Administrative Office
                </h3>

                <p className="text-gray-300 leading-7">
                  RZ 25/26, Vaishali Colony,
                  Gali No. 1, Dwarka Sector-1,
                  New Delhi
                </p>

                <p className="text-[#D4AF37] text-sm mt-2">
                  Visit by Appointment Only
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <FaPhone className="text-[#D4AF37] text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-2">
                  Call Us
                </h3>

                <p className="text-gray-300">
                  9990194025
                </p>

                <p className="text-gray-300">
                  9289868780
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <FaEnvelope className="text-[#D4AF37] text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-2">
                  Email
                </h3>

                <p className="text-gray-300">
                  edspirea@gmail.com
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">

              <a
                href="tel:9990194025"
                className="bg-[#D4AF37] text-[#07142B] px-6 py-3 rounded-full font-bold hover:scale-105 transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919990194025"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white hover:text-[#07142B] transition"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="bg-white rounded-3xl p-8 text-black shadow-2xl">

            <span className="inline-block bg-[#D4AF37]/20 text-[#07142B] px-4 py-2 rounded-full font-semibold mb-4">
              Free Demo Class
            </span>

            <h3 className="text-3xl font-bold text-[#07142B] mb-4">
              Request a Callback
            </h3>

            <p className="text-gray-600 mb-6">
              Fill in your details and our team will contact you shortly.
            </p>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Student / Parent Name"
                className="w-full p-4 border rounded-xl"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 border rounded-xl"
              />

              <textarea
                rows="5"
                placeholder="Programme / Class Interested In"
                className="w-full p-4 border rounded-xl"
              ></textarea>

              <button
                className="w-full bg-[#D4AF37] text-[#07142B] py-4 rounded-xl font-bold hover:opacity-90 transition"
              >
                Request Callback
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;