import React from "react";
import Link from "@/routing/Link";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:3000"}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Login successful
      const { token, user } = data;

      // Serialize user object safely for URL
      const userStr = encodeURIComponent(JSON.stringify(user));
      window.location.href = `/dashboard?token=${token}&user=${userStr}`;

    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-4 pt-16 pb-12 text-center md:pb-20">
      <h1 className="text-3xl md:text-5xl font-semibold text-[#424242] mb-4 leading-tight">
        Login to Kite
      </h1>
      <p className="text-[#424242] text-sm md:text-lg mb-12 md:mb-16 opacity-80">
        Welcome back, please login to your account
      </p>

      <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
        <div className="w-full text-left">
          <h2 className="text-2xl font-medium text-[#424242] mb-2">Login</h2>
          <p className="text-[#9b9b9b] mb-6">Or <Link href="/open-account" className="text-[#387ed1]">sign up</Link> if you don't have an account</p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className="border border-gray-300 rounded overflow-hidden p-1 bg-white focus-within:border-[#387ed1] transition-colors">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 outline-none text-[#444] text-sm md:text-base placeholder-gray-400"
                />
              </div>
              <div className="border border-gray-300 rounded overflow-hidden p-1 bg-white focus-within:border-[#387ed1] transition-colors">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 outline-none text-[#444] text-sm md:text-base placeholder-gray-400"
                />
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-500 text-left">
                {error}
              </p>
            )}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="bg-[#387ed1] hover:bg-[#2b65ab] text-white font-medium py-2.5 px-6 rounded text-sm md:text-base transition-colors w-full disabled:opacity-70 disabled:cursor-not-allowed">
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="text-[10px] md:text-xs text-[#9b9b9b] mt-4 leading-relaxed text-center">
              By proceeding, you agree to the Zerodha <a href="#" className="text-[#387ed1]">terms</a> & <a href="#" className="text-[#387ed1]">privacy policy</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;