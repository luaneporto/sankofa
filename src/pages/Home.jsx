
import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/ui/carousel";

function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const events = [
    {
      date: "15 Abril",
      title: "Festival de Cultura Afro",
      location: "Centro Cultural, Rio de Janeiro",
      link: "/editais/festival-cultura-afro"
    },
    {
      date: "22 Abril",
      title: "Workshop de Dança africanas",
      location: "Teatro Municipal, Rio de Janeiro",
      link: "/editais/workshop-danca"
    }
  ];

  const carouselImages = [
    <img 
      key="slide-1"
      className="w-full h-[400px] object-cover"
      alt="Festival de Cultura afro-brasileiras"
     src="public/images/IMG_9402.JPG" />,
    <img 
      key="slide-2"
      className="w-full h-[400px] object-cover"
      alt="Exposição de Arte africanas"
     src="public/images/IMG_4920.JPG" />,
    <img 
      key="slide-3"
      className="w-full h-[400px] object-cover"
      alt="Workshop de Música Tradicional"
     src="public/images/IMG_9402.JPG" />
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center space-y-6"
        >
          <div className="mt-8">
            <Carousel images={carouselImages} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Sankofa Produções
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Valorizando e promovendo as culturas africanas e afro-brasileiras através de produções culturais inovadoras
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="/servicos">Nossos Serviços</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/sobre">Saiba Mais</a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="grid md:grid-cols-2 gap-8">
        <motion.div
          {...fadeIn}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Próximos Eventos</h2>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className="flex items-start space-x-4">
                <Calendar className="text-primary" />
                <div>
                  <p className="font-semibold">{event.date}</p>
                  <h3 className="text-lg font-medium">{event.title}</h3>
                  <p className="text-gray-600">{event.location}</p>
                  <Button variant="link" className="mt-2 p-0" asChild>
                    <a href={event.link} className="flex items-center">
                      Ver detalhes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeIn}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Editais Abertos</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold">Edital de Fomento à Cultura</h3>
              <p className="text-gray-600">Inscrições até 30 de Abril</p>
              <Button variant="link" className="mt-2 p-0" asChild>
                <a href="/editais/fomento-cultura" className="flex items-center">
                  Ver detalhes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold">Prêmio de Artes Cênicas</h3>
              <p className="text-gray-600">Inscrições até 15 de Maio</p>
              <Button variant="link" className="mt-2 p-0" asChild>
                <a href="/editais/premio-artes" className="flex items-center">
                  Ver detalhes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary text-white rounded-lg p-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto space-y-4"
        >
          <h2 className="text-2xl font-bold">Fique por dentro dos editais</h2>
          <p>
            Receba atualizações sobre novos editais culturais diretamente no seu email
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <Button variant="secondary">Inscrever</Button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
