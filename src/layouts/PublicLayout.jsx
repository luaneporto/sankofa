
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Instagram, Mail, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

function PublicLayout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/sobre", label: "O que Somos" },
    { path: "/equipe", label: "Quem Somos" },
    { path: "/servicos", label: "O que Fazemos" },
    { path: "/editais", label: "Editais" },
    { path: "/blog", label: "Blog" },
  ];

  return (
    <div className="min-h-screen flex flex-col sankofa-pattern">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold text-primary">
              Sankofa
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-gray-900 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Social Icons */}
              <div className="flex items-center space-x-4 ml-4 border-l pl-4">
                <a
                  href="https://instagram.com/sankofapbr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="mailto:contato@sankofapbr.com.br"
                  className="text-gray-900 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>

              {/* Search */}
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-gray-900 hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-4 px-3 py-2">
                <a
                  href="https://instagram.com/sankofapbr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="mailto:contato@sankofapbr.com.br"
                  className="text-gray-900 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-primary text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Sankofa Produções</h3>
              <p className="text-sm">
                Produtora cultural comprometida com a valorização das culturas
                africanas e afro-brasileiras.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <p className="text-sm">Email: contato@sankofapbr.com.br</p>
              <p className="text-sm">Tel: (21) 99999-9999</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/sankofapbr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="mailto:contato@sankofapbr.com.br"
                  className="hover:text-gray-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} Sankofa Produções. Todos os direitos
            reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PublicLayout;
