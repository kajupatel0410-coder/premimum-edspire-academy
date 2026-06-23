import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919990194025"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 hover:scale-105 transition duration-300"
      aria-label="Admissions Enquiry"
    >
      <FaWhatsapp size={26} />

      <span className="font-semibold">
        Admissions Enquiry
      </span>
    </a>
  );
}

export default WhatsAppButton;