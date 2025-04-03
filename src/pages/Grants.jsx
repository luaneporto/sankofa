
import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

function Grants() {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");

  const grants = [
    {
      title: "Edital de Fomento à Cultura",
      organization: "Secretaria de Cultura do Rio de Janeiro",
      deadline: "30 de Abril, 2025",
      value: "Até R$ 100.000",
      description: "Apoio a projetos culturais que promovam as culturas afro-brasileiras no estado do Rio de Janeiro."
    },
    {
      title: "Prêmio de Artes Cênicas",
      organization: "Fundação Cultural",
      deadline: "15 de Maio, 2025",
      value: "R$ 50.000",
      description: "Premiação para espetáculos teatrais que abordem temas relacionados à cultura africanas."
    },
    {
      title: "Edital de Música",
      organization: "Instituto Cultural",
      deadline: "1 de Junho, 2025",
      value: "Até R$ 80.000",
      description: "Apoio a projetos musicais que valorizem ritmos e sonoridades africanass e afro-brasileirass."
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    toast({
      title: "Inscrição realizada!",
      description: "Você receberá atualizações sobre novos editais.",
    });
    setEmail("");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-primary mb-6">Editais Culturais</h1>
        <p className="text-xl text-gray-600">
          Encontre oportunidades de financiamento para seus projetos culturais
        </p>
      </motion.section>

      <div className="space-y-6">
        {grants.map((grant, index) => (
          <motion.div
            key={grant.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-primary">{grant.title}</h3>
                <p className="text-gray-500">{grant.organization}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{grant.deadline}</span>
                </div>
                <p className="font-semibold text-primary">{grant.value}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">{grant.description}</p>
            <div className="mt-4">
              <Button variant="outline" className="text-sm" asChild>
                <a href="#" className="flex items-center">
                  Ver detalhes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-primary text-white rounded-lg p-8"
      >
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <Bell className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">Receba Novos Editais</h2>
          <p>
            Cadastre-se para receber notificações sobre novos editais culturais
            assim que forem publicados.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              required
            />
            <Button variant="secondary">Inscrever</Button>
          </form>
        </div>
      </motion.section>
    </div>
  );
}

export default Grants;
