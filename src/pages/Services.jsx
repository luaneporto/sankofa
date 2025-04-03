
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

function Services() {
  const services = [
    {
      title: "Produção de Eventos",
      description: "Organizamos festivais, shows, exposições e eventos culturais que celebram as culturas africanas e afro-brasileiras.",
      features: [
        "Planejamento completo",
        "Curadoria artística",
        "Gestão de fornecedores",
        "Coordenação técnica"
      ]
    },
    {
      title: "Consultoria cultural",
      description: "Oferecemos orientação especializada para projetos culturais, desde a concepção até a execução.",
      features: [
        "Elaboração de projetos",
        "Captação de recursos",
        "Gestão de editais",
        "Prestação de contas"
      ]
    },
    {
      title: "Formação e Workshops",
      description: "Desenvolvemos programas educativos e workshops sobre cultura africanas e afro-brasileiras.",
      features: [
        "Oficinas temáticas",
        "Palestras",
        "Cursos práticos",
        "Material didático"
      ]
    }
  ];

  const successCases = [
    {
      title: "Festival Afro-Brasil",
      description: "Festival anual que reúne mais de 10.000 pessoas celebrando as culturas afro-brasileiras.",
      image: "festival-afro-brasil"
    },
    {
      title: "Exposição Ancestralidade",
      description: "Mostra itinerante que já percorreu 5 estados, alcançando mais de 50.000 visitantes.",
      image: "exposicao-ancestralidade"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-primary mb-6">O que Fazemos</h1>
        <p className="text-xl text-gray-600">
          Nossos serviços são dedicados à promoção e valorização das culturas
          africanas e afro-brasileiras
        </p>
      </motion.section>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-primary text-center">Cases de Sucesso</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {successCases.map((case_, index) => (
            <div key={case_.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <img 
                  className="w-full h-full object-cover"
                  alt={case_.title}
                 src="public/images/IMG_9402.JPG" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{case_.title}</h3>
                <p className="text-gray-600">{case_.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default Services;
