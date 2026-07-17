import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Layouts
import AdminLayout from "./layouts/AdminLayout";

// Common Components
import Navbar from "./components/common/Navbar";
import WhatsAppButton from "./components/common/WhatsAppButton";
import TawkChat from "./components/common/TawkChat";
import { ToastProvider } from "./components/common/ToastContext";
import Footer from "./components/home/Footer";

// Authentication
import RequireAdmin from "./components/admin/RequireAdmin";

// Website Router
import AppRouter from "./router/AppRouter";

// ============================
// Admin Pages
// ============================

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";

import PackagesAdmin from "./pages/admin/Packages";
import CreatePackage from "./pages/admin/CreatePackage";
import EditPackage from "./pages/admin/EditPackage";

import Gallery from "./pages/admin/Gallery";
import Bookings from "./pages/admin/Bookings";
import CustomerInquiries from "./pages/admin/CustomerInquiries";
import Users from "./pages/admin/Users";
import SocialSettings from "./pages/admin/SocialSettings";

function AppRoutes() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}

      <Routes>

        {/* ============================
            ADMIN LOGIN
        ============================ */}

        <Route path="/admin/login" element={<Login />} />

        {/* ============================
            ADMIN PANEL
        ============================ */}

        <Route path="/admin" element={<AdminLayout />}>

          <Route
            index
            element={
              <RequireAdmin>
                <Dashboard />
              </RequireAdmin>
            }
          />

          <Route
            path="dashboard"
            element={
              <RequireAdmin>
                <Dashboard />
              </RequireAdmin>
            }
          />

          <Route
            path="packages"
            element={
              <RequireAdmin>
                <PackagesAdmin />
              </RequireAdmin>
            }
          />

          <Route
            path="packages/create"
            element={
              <RequireAdmin>
                <CreatePackage />
              </RequireAdmin>
            }
          />

          <Route
            path="packages/:id/edit"
            element={
              <RequireAdmin>
                <EditPackage />
              </RequireAdmin>
            }
          />

          <Route
            path="gallery"
            element={
              <RequireAdmin>
                <Gallery />
              </RequireAdmin>
            }
          />

          <Route
            path="bookings"
            element={
              <RequireAdmin>
                <Bookings />
              </RequireAdmin>
            }
          />

          <Route
            path="customer-inquiries"
            element={
              <RequireAdmin>
                <CustomerInquiries />
              </RequireAdmin>
            }
          />

          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          />

          <Route
            path="social-settings"
            element={
              <RequireAdmin>
                <SocialSettings />
              </RequireAdmin>
            }
          />

        </Route>

        {/* ============================
            WEBSITE
        ============================ */}

        <Route path="/*" element={<AppRouter />} />

      </Routes>

      {!isAdmin && <Footer />}
      {!isAdmin && <WhatsAppButton />}
      {!isAdmin && <TawkChat />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <ToastProvider>
          <AppRoutes />
        </ToastProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
}