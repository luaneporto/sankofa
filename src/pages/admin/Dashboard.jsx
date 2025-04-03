
import React from "react";
import { motion } from "framer-motion";
import { Users, FileText, Mail, TrendingUp } from "lucide-react";

function Dashboard() {
  const stats = [
    {
      title: "Membros da Equipe",
      value: "12",
      icon: Users,
      change: "+2 este mês",
    },
    {
      title: "Editais Ativos",
      value: "8",
      icon: FileText,
      change: "+3 esta semana",
    },
    {
      title: "Inscritos Newsletter",
      value: "1,234",
      icon: Mail,
      change: "+123 este mês",
    },
    {
      title: "Visualizações",
      value: "45.2k",
      icon: TrendingUp,
      change: "+12% este mês",
    },
  ];

  const recentGrants = [
    {
      title: "Edital de Fomento à Cultura",
      status: "Ativo",
      submissions: 45,
      deadline: "30 de Abril, 2025",
    },
    {
      title: "Prêmio de Artes Cênicas",
      status: "Ativo",
      submissions: 28,
      deadline: "15 de Maio, 2025",
    },
    {
      title: "Edital de Música",
      status: "Rascunho",
      submissions: 0,
      deadline: "1 de Junho, 2025",
    },
  ];

  const recentSubscribers = [
    {
      email: "maria@email.com",
      date: "2 min atrás",
      source: "Página de Editais",
    },
    {
      email: "joao@email.com",
      date: "5 min atrás",
      source: "Newsletter Home",
    },
    {
      email: "ana@email.com",
      date: "15 min atrás",
      source: "Página de Editais",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Bem-vindo ao painel administrativo</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </h3>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">{stat.change}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Editais Recentes
          </h2>
          <div className="space-y-4">
            {recentGrants.map((grant) => (
              <div
                key={grant.title}
                className="flex items-center justify-between border-b pb-4 last:border-0"
              >
                <div>
                  <h3 className="font-medium text-gray-800">{grant.title}</h3>
                  <p className="text-sm text-gray-500">
                    {grant.submissions} inscrições • Prazo: {grant.deadline}
                  </p>
                </div>
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
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Novos Inscritos
          </h2>
          <div className="space-y-4">
            {recentSubscribers.map((subscriber) => (
              <div
                key={subscriber.email}
                className="flex items-center justify-between border-b pb-4 last:border-0"
              >
                <div>
                  <h3 className="font-medium text-gray-800">
                    {subscriber.email}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Via {subscriber.source} • {subscriber.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;
