
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-primary mb-6">O que Somos</h1>
        <p className="text-xl text-gray-600">
          A Sankofa Produções é uma produtora cultural dedicada à valorização e
          promoção da cultura africana e afro-brasileira.
        </p>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <img 
            className="rounded-lg shadow-lg"
            alt="Equipe Sankofa em ação"
           src="https://images.unsplash.com/photo-1568577068303-3ccfdc732a9b" />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Nossa História</h2>
          <p className="text-gray-600">
            Fundada em 2020, nascemos do desejo de criar pontes entre a rica
            herança cultural africana e as expressões contemporâneas da cultura
            afro-brasileira. O símbolo Sankofa, que representa a importância de
            conhecer o passado para construir o futuro, guia nossa missão.
          </p>
        </div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-primary mb-6">Nossa Missão</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img 
                className="w-8 h-8"
                alt="Ícone de Preservação"
               src="https://images.unsplash.com/photo-1675091258508-21bd0183ea2d" />
            </div>
            <h3 className="font-bold mb-2">Preservar</h3>
            <p className="text-gray-600">
              Manter viva a memória e as tradições culturais africanas e afro-brasileiras
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img 
                className="w-8 h-8"
                alt="Ícone de Difusão"
               src="https://images.unsplash.com/photo-1567485898576-90fd71a80b0a" />
            </div>
            <h3 className="font-bold mb-2">Difundir</h3>
            <p className="text-gray-600">
              Compartilhar conhecimentos e expressões culturais com novos públicos
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img 
                className="w-8 h-8"
                alt="Ícone de Inovação"
               src="https://images.unsplash.com/photo-1682965181456-a85555ac6c59" />
            </div>
            <h3 className="font-bold mb-2">Inovar</h3>
            <p className="text-gray-600">
              Criar novas formas de expressão cultural mantendo a essência das tradições
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;
