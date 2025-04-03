
import React from "react";
import { motion } from "framer-motion";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

function AdminTeam() {
  const { toast } = useToast();
  const [teamMembers, setTeamMembers] = React.useState([
    {
      id: 1,
      name: "Ana Silva",
      role: "Diretora Executiva",
      email: "ana@sankofapbr.com.br",
      description: "Especialista em produção cultural com mais de 15 anos de experiência em projetos afro-brasileiros.",
      image: "ana-silva.jpg"
    },
    {
      id: 2,
      name: "Carlos Santos",
      role: "Diretor Artístico",
      email: "carlos@sankofapbr.com.br",
      description: "Artista e curador com vasta experiência em festivais e exposições de arte africana contemporânea.",
      image: "carlos-santos.jpg"
    },
    {
      id: 3,
      name: "Mariana Oliveira",
      role: "Coordenadora de Projetos",
      email: "mariana@sankofapbr.com.br",
      description: "Gestora cultural especializada em editais e projetos de fomento à cultura.",
      image: "mariana-oliveira.jpg"
    }
  ]);

  const handleDelete = (id) => {
    setTeamMembers(members => members.filter(member => member.id !== id));
    toast({
      title: "Membro removido",
      description: "O membro da equipe foi removido com sucesso.",
    });
  };

  const handleEdit = (id) => {
    toast({
      title: "Editar membro",
      description: "Funcionalidade em desenvolvimento.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Gerenciar Equipe</h1>
          <p className="text-gray-600">Adicione ou edite membros da equipe</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Membro
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="aspect-square relative">
              <img 
                className="w-full h-full object-cover"
                alt={`Foto de ${member.name}`}
               src="https://images.unsplash.com/photo-1495125175509-8fddf00e56cd" />
              <div className="absolute top-2 right-2 flex space-x-2">
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={() => handleEdit(member.id)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() => handleDelete(member.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="text-sm text-gray-500 mb-4">{member.email}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AdminTeam;
