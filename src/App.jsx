import { useState } from "react";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import StudentDashboard from "./components/StudentDashboard";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [viewStudent, setViewStudent] = useState(true);

  if (!isAdmin && !viewStudent) {
    return <AdminLogin onLogin={() => setIsAdmin(true)} />;
  }

  if (isAdmin) {
    return (
      <AdminDashboard
        onLogout={() => {
          setIsAdmin(false);
          setViewStudent(true);
        }}
      />
    );
  }

  return <StudentDashboard goToAdmin={() => setViewStudent(false)} />;
}

export default App;
