import React from "react";

const OpenAccountHero = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSignup = async () => {
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:3000"}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      const { token, user } = data;

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
        Open a free demat and trading account online
      </h1>
      <p className="text-[#424242] text-sm md:text-lg mb-12 md:mb-16 opacity-80">
        Start investing brokerage free and join a community of 1.6+ crore investors and traders
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2">
          <img
            src="/assets/images/ecosystem.png"
            alt="Zerodha ecosystem"
            className="w-full max-w-md mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-16 text-left">
          <h2 className="text-2xl md:text-3xl font-medium text-[#424242] mb-2">Signup now</h2>
          <p className="text-[#9b9b9b] mb-6">Or track your existing application</p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className="border border-gray-300 rounded overflow-hidden p-1 bg-white focus-within:border-[#387ed1] transition-colors">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 outline-none text-[#444] text-sm md:text-base placeholder-gray-400"
                />
              </div>
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

            <p className="text-[10px] md:text-xs text-[#9b9b9b]">
              You will receive an email for verification
            </p>

            <button
              onClick={handleSignup}
              disabled={loading}
              className="bg-[#387ed1] hover:bg-[#2b65ab] text-white font-medium py-2.5 px-6 rounded text-sm md:text-base transition-colors w-full md:w-40 disabled:opacity-70 disabled:cursor-not-allowed">
              {loading ? "Verifying..." : "Sign Up"}
            </button>

            <p className="text-[10px] md:text-xs text-[#9b9b9b] mt-4 leading-relaxed">
              Already have an account? <a href="/login" className="text-[#387ed1] font-medium">Login</a>
            </p>
            <p className="text-[10px] md:text-xs text-[#9b9b9b] mt-1 leading-relaxed">
              By proceeding, you agree to the Zerodha <a href="#" className="text-[#387ed1]">terms</a> & <a href="#" className="text-[#387ed1]">privacy policy</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenAccountHero;