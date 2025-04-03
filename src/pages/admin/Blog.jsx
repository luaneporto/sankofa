
import React from "react";
import { motion } from "framer-motion";
import { Plus, Pencil, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

function AdminBlog() {
  const { toast } = useToast();
  const [posts, setPosts] = React.useState([
    {
      id: 1,
      title: "A Importância dos Símbolos Adinkra na Cultura Africana",
      excerpt: "Explore o significado profundo dos símbolos Adinkra e sua relevância na cultura contemporânea.",
      author: "Ana Silva",
      date: "2 Abril, 2025",
      status: "Publicado",
      category: "Cultura"
    },
    {
      id: 2,
      title: "Festivais Afro-Brasileiros: Um Guia Completo",
      excerpt: "Conheça os principais festivais que celebram a cultura afro-brasileira pelo país.",
      author: "Carlos Santos",
      date: "1 Abril, 2025",
      status: "Rascunho",
      category: "Eventos"
    }
  ]);

  const handleDelete = (id) => {
    setPosts(currentPosts => currentPosts.filter(post => post.id !== id));
    toast({
      title: "Post removido",
      description: "O post foi removido com sucesso.",
    });
  };

  const handleEdit = (id) => {
    toast({
      title: "Editar post",
      description: "Funcionalidade em desenvolvimento.",
    });
  };

  const handlePreview = (id) => {
    toast({
      title: "Visualizar post",
      description: "Funcionalidade em desenvolvimento.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Gerenciar Blog</h1>
          <p className="text-gray-600">Crie e edite posts do blog</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Post
        </Button>
      </div>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  <h3 className="text-xl font-bold text-primary">
                    {post.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      post.status === "Publicado"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {post.status}
                  </span>
                </div>
                <p className="text-gray-500 mt-1">
                  {post.author} • {post.date} • {post.category}
                </p>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
              </div>
              <div className="flex space-x-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => handlePreview(post.id)}
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={() => handleEdit(post.id)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() => handleDelete(post.id)}
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

export default AdminBlog;
