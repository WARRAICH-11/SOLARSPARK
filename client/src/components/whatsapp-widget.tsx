import { MessageCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_NUMBER = "+923127739752";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Solar Electric! I'm interested in a solar installation. Can we negotiate a price for my home/office?"
);

export function WhatsAppWidget() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=${WHATSAPP_MESSAGE}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-lg transition-all duration-300 hover:bg-[#20BD5A] hover:shadow-xl group whatsapp-pulse"
      data-testid="button-whatsapp"
      aria-label="Chat with us on WhatsApp"
    >
      <SiWhatsapp className="h-6 w-6" />
      <div className="hidden sm:block">
        <p className="text-xs font-medium opacity-90">24/7 Support</p>
        <p className="text-sm font-semibold">Chat with an Expert</p>
      </div>
    </a>
  );
}
