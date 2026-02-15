import { useAuth } from "../context/AuthContext";

const ResourceItem = ({ resource, updateStatus }) => {
  const { user } = useAuth();

  return (
    <li>
      {resource.name} - {resource.status}

      {user.role === "Admin" && (
        <button onClick={() => updateStatus(resource.id)}>
          Toggle Status
        </button>
      )}

      {user.role !== "Admin" && <span> 🔒</span>}
    </li>
  );
};

export default ResourceItem;
