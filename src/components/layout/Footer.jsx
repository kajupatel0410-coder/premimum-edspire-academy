import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#041022] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Academy */}
          <div>

           
           
            <img
            
              src={`${import.meta.env.BASE_URL}images/logo/logo.png`}
              alt="Edspire Academy"
              className="h-16 mb-4"
            />

            <h3 className="text-2xl font-bold">
              Edspire Academy
            </h3>

            <p className="text-[#D4AF37] mt-2">
              Academic Excellence • Skill Development • Future Readiness
            </p>

            <p className="text-gray-400 mt-4 leading-7">
              Empowering learners through concept-based education,
              personalised mentoring and future-ready skills.
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h4 className="text-xl font-bold mb-5 text-[#D4AF37]">
              Navigation
            </h4>

            <div className="space-y-3">

              <a href="#about" className="block hover:text-[#D4AF37]">
                About Us
              </a>

              <a href="#courses" className="block hover:text-[#D4AF37]">
                Academic Programmes
              </a>

              <a href="#faculty" className="block hover:text-[#D4AF37]">
                Faculty & Leadership
              </a>

              <a href="#gallery" className="block hover:text-[#D4AF37]">
                Campus Gallery
              </a>

              <a href="#contact" className="block hover:text-[#D4AF37]">
                Contact Us
              </a>

            </div>

          </div>

          {/* Programmes */}
          <div>

            <h4 className="text-xl font-bold mb-5 text-[#D4AF37]">
              Academic Programmes
            </h4>

            <div className="space-y-3 text-gray-300">

              <p>Primary Education (I–V)</p>

              <p>Middle & Secondary (VI–X)</p>

              <p>Senior Secondary (XI–XII)</p>

              <p>Higher Education Support</p>

              <p>Technical Education Support</p>

              <p>Spoken English & Grammar</p>

              <p>Vedic Mathematics</p>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h4 className="text-xl font-bold mb-5 text-[#D4AF37]">
              Contact Information
            </h4>

            <div className="space-y-4">

              <div className="flex gap-3">
                <FaPhone className="text-[#D4AF37] mt-1" />
                <div>
                  <p>9990194025</p>
                  <p>9289868780</p>
                </div>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-[#D4AF37] mt-1" />
                <p>edspirea@gmail.com</p>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-[#D4AF37] mt-1" />
                <p>
                  RZ G-58 Sitapuri Part-2,
                  Near Mother Dairy,
                  New Delhi - 110045
                </p>
              </div>

              <a
                href="https://wa.me/919990194025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] px-5 py-3 rounded-full font-semibold mt-3 hover:scale-105 transition"
              >
                <FaWhatsapp />
                Admissions Enquiry
              </a>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center">
            © 2026 Edspire Academy. All Rights Reserved.
          </p>

          <p className="text-gray-400 text-center">
            Empowering Learners • Building Futures
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;

