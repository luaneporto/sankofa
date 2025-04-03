
import React from "react";
import { motion } from "framer-motion";

function Team() {
  const teamMembers = [
    {
      name: "Ana Silva",
      role: "Diretora Executiva",
      description: "Especialista em produção cultural com mais de 15 anos de experiência em projetos afro-brasileiros."
    },
    {
      name: "Carlos Santos",
      role: "Diretor Artístico",
      description: "Artista e curador com vasta experiência em festivais e exposições de arte africana contemporânea."
    },
    {
      name: "Mariana Oliveira",
      role: "Coordenadora de Projetos",
      description: "Gestora cultural especializada em editais e projetos de fomento à cultura."
    },
    {
      name: "Paulo Ribeiro",
      role: "Diretor de Marketing",
      description: "Especialista em marketing digital com foco em projetos culturais e sociais."
    },
    {
      name: "Juliana Costa",
      role: "Coordenadora de Comunicação",
      description: "Jornalista especializada em comunicação cultural e relações públicas."
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
        <h1 className="text-4xl font-bold text-primary mb-6">Quem Somos</h1>
        <p className="text-xl text-gray-600">
          Conheça a equipe que faz a Sankofa Produções acontecer
        </p>
      </motion.section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="aspect-square">
              <img 
                className="w-full h-full object-cover"
                alt={`Foto de ${member.name}`}
               src="https://images.unsplash.com/photo-1683226170677-5283a0fe8c95" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Team;
