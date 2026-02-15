import { useEffect, useState } from "react";
import { mockResources } from "../data/resources";
import { useAuth } from "../context/AuthContext";
import { useRoleFilter } from "../hooks/useRoleFilter";
import ResourceList from "../components/ResourceList";

const Dashboard = () => {
  const { user } = useAuth();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setResources(mockResources);
      setLoading(false);
    }, 1000);
  }, []);

  const filtered = useRoleFilter(resources, user.role);

  // Complex Immutable Update
  const updateStatus = (id) => {
    setResources((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status: r.status === "active" ? "archived" : "active" }
          : r
      )
    );
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Dashboard ({user.role})</h2>
      <ResourceList
        resources={filtered}
        updateStatus={updateStatus}
      />
    </div>
  );
};

export default Dashboard;
