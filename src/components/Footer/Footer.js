import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import opt from '../../Assets/opt.png'

export default function Footer() {
  return (
    <Nav>
      <Logo>gitness</Logo>
      <Menu>
      <MenuItem><Link to="/getstarted">Privacy Statement</Link></MenuItem>
      <MenuItem><Link to="/getstarted">Opt Out <img src={opt} alt='img'/></Link></MenuItem>
      <MenuItem><Link to="/getstarted">Cookie Settings</Link></MenuItem>
        <MenuItem><Link to="/docs">Docs</Link></MenuItem>
        <MenuItem><Link to="/getstarted">Star us on Github</Link></MenuItem>
       
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
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
    font-weight: 600
  }
`
