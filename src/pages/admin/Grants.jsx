
import React from "react";
import { motion } from "framer-motion";
import { Plus, Pencil, Trash2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

function AdminGrants() {
  const { toast } = useToast();
  const [grants, setGrants] = React.useState([
    {
      id: 1,
      title: "Edital de Fomento à Cultura",
      organization: "Secretaria de Cultura do Rio de Janeiro",
      deadline: "30 de Abril, 2025",
      value: "Até R$ 100.000",
      description: "Apoio a projetos culturais que promovam as culturas afro-brasileiras no estado do Rio de Janeiro.",
      status: "Ativo"
    },
    {
      id: 2,
      title: "Prêmio de Artes Cênicas",
      organization: "Fundação Cultural",
      deadline: "15 de Maio, 2025",
      value: "R$ 50.000",
      description: "Premiação para espetáculos teatrais que abordem temas relacionados à cultura africanas.",
      status: "Ativo"
    },
    {
      id: 3,
      title: "Edital de Música",
      organization: "Instituto Cultural",
      deadline: "1 de Junho, 2025",
      value: "Até R$ 80.000",
      description: "Apoio a projetos musicais que valorizem ritmos e sonoridades africanass e afro-brasileirass.",
      status: "Rascunho"
    }
  ]);

  const handleDelete = (id) => {
    setGrants(currentGrants => currentGrants.filter(grant => grant.id !== id));
    toast({
      title: "Edital removido",
      description: "O edital foi removido com sucesso.",
    });
  };

  const handleEdit = (id) => {
    toast({
      title: "Editar edital",
      description: "Funcionalidade em desenvolvimento.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Gerenciar Editais</h1>
          <p className="text-gray-600">Adicione ou edite editais culturais</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Edital
        </Button>
      </div>

      <div className="space-y-6">
        {grants.map((grant, index) => (
          <motion.div
            key={grant.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  <h3 className="text-xl font-bold text-primary">
                    {grant.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      grant.status === "Ativo"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {grant.status}
                  </span>
                </div>
                <p className="text-gray-500">{grant.organization}</p>
                <div className="flex items-center text-gray-500 mt-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{grant.deadline}</span>
                  <span className="mx-2">•</span>
                  <span className="font-semibold text-primary">{grant.value}</span>
                </div>
                <p className="mt-4 text-gray-600">{grant.description}</p>
              </div>
              <div className="flex space-x-2">
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={() => handleEdit(grant.id)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() => handleDelete(grant.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AdminGrants;
