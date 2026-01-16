import { useEffect, useState } from "react";
import api from "../services/api";

export default function ProtectedRoute({ children }) {
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    api.get("/auth/me")
      .then(() => setAllowed(true))
      .catch(() => setAllowed(false));
  }, []);

  if (allowed === null) return <p>Loading...</p>;
  if (!allowed) window.location.href = "/";

  return children;
}
