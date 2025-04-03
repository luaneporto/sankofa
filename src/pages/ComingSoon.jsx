
import React from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ComingSoon() {
  const navigate = useNavigate();

  // Hidden admin access through keyboard shortcut (Ctrl + Alt + A)
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.altKey && e.key === 'a') {
        navigate("/admin/login");
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);

  return (
    <div className="coming-soon relative min-h-screen">
      {/* Background Image */}
      <img 
        className="absolute inset-0 w-full h-full object-cover"
        alt="Padrão Adinkra Sankofa"
       src="https://images.unsplash.com/photo-1558642843-d6351b0ccf51" />

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0047AB]/80 via-[#0047AB]/70 to-black/90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="max-w-2xl mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                Sankofa Produções
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-gray-200">
                Em breve, traremos uma nova experiência em produção cultural.
                Aguarde novidades!
              </p>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center space-x-8 mb-12"
            >
              <a
                href="https://instagram.com/sankofaproducoes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors transform hover:scale-110"
              >
                <Instagram size={32} />
              </a>
              <a
                href="mailto:contato@sankofapbr.com.br"
                className="text-white hover:text-gray-300 transition-colors transform hover:scale-110"
              >
                <Mail size={32} />
              </a>
              <a
                href="tel:+552199999999"
                className="text-white hover:text-gray-300 transition-colors transform hover:scale-110"
              >
                <Phone size={32} />
              </a>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-sm text-gray-300"
            >
              <p>contato@sankofapbr.com.br</p>
              <p>(21) 99999-9999</p>
              <p>Rio de Janeiro, RJ</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ComingSoon;
