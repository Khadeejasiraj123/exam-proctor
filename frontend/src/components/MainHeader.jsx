import { useState, useEffect, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import "./MainHeader.scss";

export default function MainHeader() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("storedUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, [user.role]); // Empty dependency array to run the effect only once when the component mounts

  const handleLogout = () => {
    localStorage.removeItem("storedUser");
    setUser({}); // Clear user state upon logout
    window.location.href = "/login";
  };

  return (
    <header>
      <nav className="nav">
        <div className="nav--logo">
          <NavLink to="/"> ExamProctor</NavLink>
        </div>
        {Object.keys(user).length > 0 ? ( // Check if user object is not empty
          <div className="nav--auth">
            <div className="nav--auth-left">
              <ul>
                {user.role === "user" && (
                  <Fragment>
                    <li>
                      <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                      <NavLink to="/booking">Book Exams</NavLink>
                    </li>
                  </Fragment>
                )}

                {user.role === "proctor" && (
                  <Fragment>
                    <li>
                      <NavLink to="/proctor">Dashboard</NavLink>
                    </li>

                    <li>
                      <NavLink to="/addExam">Add Exam</NavLink>
                    </li>
                  </Fragment>
                )}
                {user.role === "admin" && (
                  <Fragment>
                    <li>
                      <NavLink to="/admin">Add Proctor</NavLink>
                    </li>

                    <li>
                      <NavLink to="/viewProctor">View Proctor </NavLink>
                    </li>
                    <li>
                      <NavLink to="/viewStudent">View Student </NavLink>
                    </li>


                  </Fragment>
                )}

              </ul>
            </div>
            <div className="nav--auth-right">
              <div className="nav--auth-name">
                Hello <strong>{user.first_name}</strong>!
              </div>
              <Button
                variant="outlined"
                color="inherit"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </div>
        ) : (
          <ul className="nav--list-right">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
