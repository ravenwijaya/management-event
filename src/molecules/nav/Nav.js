import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Typography from "../../atoms/typography/Typhography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const Nav = (props) => {
  const [user, setUser] = useContext(UserContext);
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <>
      <AppBar data-testid={props.datatest} position={props.position}>
        <Toolbar>
        <Typography variant="h6" text="Metrodata" className="logo"/>
          <Link to="/Home" style={{ textDecoration: 'none',padding:10,marginLeft:"auto" }}>
            <Typography variant="h7" text="Home" />
          </Link>
          <Link to="/Login" style={{ textDecoration: 'none',padding:10 }}>
            <Typography variant="h7" text="Login" />
          </Link>
          <Link to="/Signup" style={{ textDecoration: 'none',padding:10 }}>
            <Typography variant="h7" text="Signup" />
          </Link>
          
          {user && (
            <Link to="/LogOut" style={{ textDecoration: 'none' ,padding:10}}>
            <Typography variant="h7" text="LogOut" />
          </Link>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
