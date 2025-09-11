import { Outlet } from "react-router-dom";
import BottomBar from "../components/BottomBar.jsx";

export default function DefaultLayout() {
  // const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#f0f0f0",
      }}
    >
      <Outlet />
    </div>
  );
}
