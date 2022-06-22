import * as React from "react";
import styled from "styled-components";
import SideNav from "../sidebar/SideNav";
import { Link } from "react-router-dom";
import myImage from "../../assets/favicon.png";

const Topbarbase = styled.nav`
  background: transparent;
  top: 0;
  left: 0;
  background-color: rgb(26, 26, 26);
  font-size: 1rem;
  display: flex;
  position: sticky;
  width: 100%;
  z-index: 10;
  border-bottom: 1px solid white;
  @media (max-width: 100%) {
    width: 80%;
  }
`;

const NavLinks = styled.ul`
  & a {
    font-size: 15px;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    padding: 16px 16px;
    cursor: pointer;
    background-color: #ff6600;
    line-height: 1em;
    border: 2px solid #ff6600;
    font-weight: bold;
    border-radius: 10px;
  }
`;

const NavLogo = styled.ul`
  & a {
    background-image: url(${myImage});
    display: flex;
    font-size: 15px;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    padding: 24px 24px;
    cursor: pointer;
    background-color: rgb(26, 26, 26);
    line-height: 1em;
    border: 2px solid #ff6600;
    font-weight: bold;
    border-radius: 10px;
  }
`;

const Button = styled.div`
  margin-right: 20px;
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 15px;
  line-height: 30px;
`;

const TopNav = () => {
  return (
    <Topbarbase>
      <SideNav />
      <NavLogo>
        <Link to="/"></Link>
      </NavLogo>
      <NavLinks>
        <Button>
          <Link to="/">Login</Link>
        </Button>
        <Button>
          <Link to="/">Register</Link>
        </Button>
      </NavLinks>
    </Topbarbase>
  );
};

export default TopNav;
