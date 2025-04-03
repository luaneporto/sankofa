import React from "react";
import { motion } from "framer-motion";
import teamMembers from '../components/team/teamMembers';

function Team() {
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

      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/2 lg:w-1/4"
          >
            <div className="aspect-square">
              <img 
                className="w-full h-full object-cover"
                alt={`Foto de ${member.name}`}
                src={member.image} />
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