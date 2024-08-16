import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Button onClick={handleLogout} variant="contained" color="secondary">
        Logout
      </Button>
      {/* Add other dashboard content here */}
    </div>
  );
};

export default Dashboard;
