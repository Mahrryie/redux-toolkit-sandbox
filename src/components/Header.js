import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";
import classes from "./Header.module.css";

const Header = () => {
  console.log("Header rendered");

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(authActions.logOut());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isAuthenticated && (
            <>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
            </>
          )}
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
