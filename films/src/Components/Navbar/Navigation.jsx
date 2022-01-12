import { NavLink, Outlet } from "react-router-dom";
export const Navigation = () => {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");
  return (
    <>
      <nav className="nav_bar">
        <div className="nav_item">
          <NavLink to="/Favorites" className={setActive}>
            Favorites
          </NavLink>
        </div>
        <div className="nav_item">
          <NavLink to="/Watched" className={setActive}>
            {" "}
            Watched{" "}
          </NavLink>
        </div>
        <div className="nav_item">
          <NavLink to="/Main_page" className={setActive}>
            Main page
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
