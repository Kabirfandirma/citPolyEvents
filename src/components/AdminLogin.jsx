import { useState } from "react";

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      onLogin();
    } else {
      setError("Incorrect username or password");
    }
  };

  return (
    <div className="relative bg-school bg-cover bg-center min-h-screen flex items-center justify-center">
      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/40"></div>

      {/* Login Card */}
      <div className="relative bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-lg w-96 text-center">
        {/* Logo */}
        <img
          src="/logo192.png"
          alt="School Logo"
          className="w-20 h-20 object-contain mx-auto mb-4 drop-shadow-xl"
        />

        <h1 className="text-primary text-2xl font-bold mb-4">Admin Login</h1>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="p-3 rounded-lg border text-center"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg border text-center"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-accent text-white py-2 rounded-lg shadow-lg hover:from-accent hover:to-primary transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
