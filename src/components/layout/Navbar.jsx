function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#07142B] shadow-lg">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <img
              src={`${import.meta.env.BASE_URL}images/logo/logo.png`}
              alt="Edspire Academy"
              className="h-14 w-auto"
            />

            <div>
              <h1 className="text-white font-bold text-xl">
                Edspire Academy
              </h1>

              <p className="text-[#D4AF37] text-xs tracking-wider">
                Academic Excellence
              </p>
            </div>

          </div>

          {/* Menu */}
          <div className="flex gap-6 text-white font-medium">

            <a href="#about" className="hover:text-[#D4AF37] transition">
              About
            </a>

            <a href="#courses" className="hover:text-[#D4AF37] transition">
              Programmes
            </a>

            <a href="#faculty" className="hover:text-[#D4AF37] transition">
              Faculty
            </a>

            <a href="#gallery" className="hover:text-[#D4AF37] transition">
              Gallery
            </a>

            <a href="#contact" className="hover:text-[#D4AF37] transition">
              Contact
            </a>

          </div>

          {/* CTA */}
          <a
            href="tel:9990194025"
            className="bg-[#D4AF37] text-[#07142B] px-5 py-3 rounded-full font-bold hover:scale-105 transition"
          >
            Call Now
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;