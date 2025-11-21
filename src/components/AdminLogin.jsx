import { useState } from "react";

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded admin credentials
    if (username === "admin" && password === "1234") {
      onLogin();
    } else {
      setError("Incorrect username or password");
    }
  };

  return (
    <div className="bg-school bg-cover bg-center min-h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-primary text-2xl font-bold mb-4 text-center">
          Admin Login
        </h1>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="p-3 rounded border"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded border"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-primary text-white py-2 rounded hover:bg-secondary transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
