import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import gitness from "../Assets/gitness logo.svg";

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        gitness <sup style={{ fontSize: "30%" }}>TM</sup>
      </Logo>
      <Menu>
        <MenuItem>
          <Link to="/docs">Docs</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/getstarted">Star us on Github</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/getstarted">
            <button
              className="btn"
              style={{
                height: "60%",
                backgroundColor: "#070709",
                color: "#ffffff",
              }}
            >
              {" "}
              Get Started
            </button>
          </Link>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
  width: 85%;
  margin: auto;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-left: 2rem;
  a {
    color: white;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
  }
`;

export default Navbar;
