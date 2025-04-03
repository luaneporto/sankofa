import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import PublicLayout from "@/layouts/PublicLayout";
import AdminLayout from "@/layouts/AdminLayout";
import ComingSoon from "@/pages/ComingSoon";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Services from "@/pages/Services";
import Blog from "@/pages/Blog";
import Grants from "@/pages/Grants";
import AdminDashboard from "@/pages/admin/Dashboard";
import AdminTeam from "@/pages/admin/Team";
import AdminGrants from "@/pages/admin/Grants";
import AdminBlog from "@/pages/admin/Blog";
import AdminSubscribers from "@/pages/admin/Subscribers";
import Login from "@/pages/admin/Login";

function App() {
  // Show Coming Soon page for all routes except admin routes and when user is not authenticated
  const isAdminRoute = window.location.pathname.startsWith('/admin');
  const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
  const SHOW_COMING_SOON = !isAdminRoute && !isAuthenticated;

  if (SHOW_COMING_SOON) {
    return <ComingSoon />;
  }

  return (
    <> {/* Using a React Fragment as the parent element */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<About />} />
          <Route path="equipe" element={<Team />} />
          <Route path="servicos" element={<Services />} />
          <Route path="blog" element={<Blog />} />
          <Route path="editais" element={<Grants />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="equipe" element={<AdminTeam />} />
          <Route path="editais" element={<AdminGrants />} />
          <Route path="blog" element={<AdminBlog />} />
          <Route path="inscritos" element={<AdminSubscribers />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
