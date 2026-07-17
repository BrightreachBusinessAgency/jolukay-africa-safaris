import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RequireAdmin({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return <>{children}</>;
}
