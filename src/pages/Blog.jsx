
import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "A Importância dos Símbolos Adinkra nas culturas africanas",
      excerpt: "Explore o significado profundo dos símbolos Adinkra e sua relevância nas culturas contemporânea.",
      author: "Luane Porto",
      date: "2 Abril, 2025",
      category: "Cultura",
      image: "adinkra-symbols"
    },
    {
      id: 2,
      title: "Festivais Afro-Brasileiros: Um Guia Completo",
      excerpt: "Conheça os principais festivais que celebram as culturas afro-brasileiras pelo país.",
      author: "Henrique Porto",
      date: "1 Abril, 2025",
      category: "Eventos",
      image: "festivals"
    },
    {
      id: 3,
      title: "Produção Cultural na Era Digital",
      excerpt: "Como a tecnologia está transformando a forma de produzir e consumir cultura.",
      author: "Mariana Oliveira",
      date: "31 Março, 2025",
      category: "Tecnologia",
      image: "digital-culture"
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
        <h1 className="text-4xl font-bold text-primary mb-6">Blog</h1>
        <p className="text-xl text-gray-600">
          Novidades, artigos e insights sobre cultura africanas e afro-brasileiras
        </p>
      </motion.section>

      <div className="grid gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  className="h-48 w-full object-cover md:h-full"
                  alt={post.title}
                 src="public/images/IMG_4920.JPG" />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="mx-4 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button variant="link" className="p-0" asChild>
                  <a href={`/blog/${post.id}`} className="flex items-center">
                    Ler mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default Blog;
