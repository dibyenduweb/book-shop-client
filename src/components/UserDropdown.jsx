import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserData from "../hooks/useUserData";
import { FaHeart } from "react-icons/fa";

const UserDropdown = () => {
  const { user, Logout } = useAuth();
  const userData = useUserData();

  const handleLogout = () => {
    Logout();
  };

  const wishlistLength = userData?.wishlist?.length || 0;

  return (
    <div>
      <Link to="/dashboard/wishlist">
        <button className="btn btn-sm mb-3">
          <FaHeart />
          <div className="badge">{wishlistLength}</div>
        </button>
      </Link>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
              <img
                src={
                  user?.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
                }
                alt="User Avatar"
              />
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <Link to="/dashboard/overview">Dashboard</Link>
          </li>
          <li>
            <button onClick={handleLogout} className="btn btn-primary btn-sm">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDropdown;
