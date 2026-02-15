import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { hasPermission } from "../utils/roleHierarchy";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav>
      <hr />

      <Link to="/dashboard">Dashboard</Link>

      {" | "}

      {/* Admin-only link */}
      {user && hasPermission(user.role, "Admin") && (
        <>
          <Link to="/admin">Admin Panel</Link>
          {" | "}
        </>
      )}

      {/* Show user info if logged in */}
      {user ? (
        <>
          <span>
            Logged in as: <strong>{user.role}</strong>
          </span>

          {" | "}

          <button onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}

      <hr />
    </nav>
  );
};

export default Navbar;
