import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import Button from "../../components/common/Button";
import API_URL from "../../services/api";
import { useToast } from "../../components/common/ToastContext";

export default function Login() {
  const [email, setEmail] = useState("admin@jolukayafricasafaris.com");
  const [password, setPassword] = useState("Admin@12345");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { showToast } = useToast();

  useEffect(() => {
    if (localStorage.getItem("adminToken")) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.message || "Login failed.");
      }

      localStorage.setItem("adminToken", payload.token);

      if (rememberMe) {
        localStorage.setItem("adminEmail", email);
      } else {
        localStorage.removeItem("adminEmail");
      }

      showToast("success", "Welcome back!");

      navigate("/admin/dashboard");
    } catch (error) {
      showToast(
        "error",
        error instanceof Error ? error.message : "Unable to login."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-6 py-16">
      <div className="w-full max-w-md rounded-3xl bg-white border border-slate-200 shadow-2xl p-10">

        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            JOLUKAY Admin
          </h1>

          <p className="mt-3 text-slate-600">
            Sign in to manage your safari website.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >
          <div>
            <label className="text-sm font-semibold text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700">
              Password
            </label>

            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 pr-12 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />

              Remember Me
            </label>

            <button
              type="button"
              className="text-green-700 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full"
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} JOLUKAY Africa Safaris.
          <br />
          Secure Administration Portal
        </div>

      </div>
    </div>
  );
}