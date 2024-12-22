import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="bg-base-200">
        <Navbar />
      </div>
    <div className="min-h-screen">
    <Outlet />
    </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default MainLayout;
