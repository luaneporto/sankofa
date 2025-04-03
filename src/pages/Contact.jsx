
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato. Retornaremos em breve.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-primary mb-6">Contato</h1>
        <p className="text-xl text-gray-600">
          Entre em contato conosco para saber mais sobre nossos serviços
        </p>
      </motion.section>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Informações de Contato
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-primary" />
                <span>contato@sankofapbr.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary" />
                <span>(21) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="text-primary" />
                <a
                  href="https://instagram.com/sankofaproducoes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  @sankofapbr
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary" />
                <span>Rio de Janeiro, RJ</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Horário de Atendimento
            </h2>
            <p className="text-gray-600">
              Segunda a Sexta: 9h às 18h
              <br />
              Sábado: 9h às 13h
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Assunto
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
