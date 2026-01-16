import api from "../services/api";

export default function Dashboard() {
  const logout = async () => {
    await api.post("/auth/logout");
    window.location.href = "/";
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <button className="btn btn-danger mt-4" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
