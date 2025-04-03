
import React from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  FileText,
  Mail,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function AdminLayout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { path: "/admin/blog", icon: LayoutDashboard, label: "Blog" },
    { path: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/admin/equipe", icon: Users, label: "Equipe" },
    { path: "/admin/editais", icon: FileText, label: "Editais" },
    { path: "/admin/inscritos", icon: Mail, label: "Inscritos" },
  ];

  const handleLogout = () => {
    // Implement logout logic here
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 admin-gradient text-white">
        <div className="p-6">
          <Link to="/admin" className="text-2xl font-bold">
            Sankofa Admin
          </Link>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  location.pathname === item.path
                    ? "bg-white/10"
                    : "hover:bg-white/5"
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4">
          <Button
            variant="ghost"
            className="w-full text-white hover:bg-white/10"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="flex flex-col flex-1">
        <header className="md:hidden admin-gradient text-white p-4">
          <div className="flex items-center justify-between">
            <Link to="/admin" className="text-xl font-bold">
              Sankofa Admin
            </Link>
            <Button
              variant="ghost"
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 space-y-2"
            >
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                      location.pathname === item.path
                        ? "bg-white/10"
                        : "hover:bg-white/5"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <Button
                variant="ghost"
                className="w-full text-white hover:bg-white/10 mt-4"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </Button>
            </motion.nav>
          )}
        </header>

        <main className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
