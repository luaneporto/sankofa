import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import TeamMembers from '../../components/team/teamMembers';

function AdminTeam() {
  const { toast } = useToast();
  const [teamMembers, setTeamMembers] = useState(TeamMembers);
  const [editing, setEditing] = useState(null);
  const [newMember, setNewMember] = useState({
    name: '',
    role: '',
    email: '',
    description: '',
    image: ''
  });

  const handleDelete = (id) => {
    setTeamMembers(members => members.filter(member => member.id !== id));
    toast({
      title: "Membro removido",
      description: "O membro da equipe foi removido com sucesso.",
    });
  };

  const handleEdit = (id) => {
    setEditing(id);
  };

  const handleSave = (id) => {
    const updatedMembers = teamMembers.map(member => {
      if (member.id === id) {
        return {
          ...member,
          name: newMember.name,
          role: newMember.role,
          email: newMember.email,
          description: newMember.description,
          image: newMember.image
        };
      }
      return member;
    });
    setTeamMembers(updatedMembers);
    setEditing(null);
    toast({
      title: "Membro atualizado",
      description: "O membro da equipe foi atualizado com sucesso.",
    });
  };

  const handleAdd = () => {
    const newId = teamMembers.length + 1;
    const newMemberData = {
      id: newId,
      name: newMember.name,
      role: newMember.role,
      email: newMember.email,
      description: newMember.description,
      image: newMember.image
    };
    setTeamMembers([...teamMembers, newMemberData]);
    setNewMember({
      name: '',
      role: '',
      email: '',
      description: '',
      image: ''
    });
    toast({
      title: "Membro adicionado",
      description: "O membro da equipe foi adicionado com sucesso.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Gerenciar Equipe</h1>
          <p className="text-gray-600">Adicione ou edite membros da equipe</p>
        </div>
        <Button onClick={handleAdd}>
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
            {editing === member.id ? (
              <div className="p-6">
                <input
                  type="text"
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  value={newMember.role}
                  onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                  className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
                />
                <textarea
                  value={newMember.description}
                  onChange={(e) => setNewMember({ ...newMember, description: e.target.value })}
                  rows={10}
                  className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
                />
                <div className="flex justify-end">
                  <Button onClick={() => handleSave(member.id)}>Salvar</Button>
                  <Button onClick={() => setEditing(null)} variant="secondary">Cancelar</Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="aspect-square relative">
                  <img 
                    className="w-full h-full object-cover"
                    alt={`Foto de ${member.name}`}
                    src={member.image} />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <Button
                      size="icon"
                      variant="secondary"
                      onClick={() => {
                        setNewMember({
                          name: member.name,
                          role: member.role,
                          email: member.email,
                          description: member.description,
                          image: member.image
                        });
                        setEditing(member.id);
                      }}
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
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AdminTeam;