import * as React from "react";
import styled from "styled-components";
import SideNav from "../sidebar/SideNav";
import { Link } from "react-router-dom";
import myImage from "../../assets/favicon.png";
import LoginButton from "../loginButton";
import LogoutButton from "../logoutButton";
import { useAuth0 } from "@auth0/auth0-react";



export const Topbarbase = styled.nav`
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
    background-color: rgb(26, 26, 26);
    line-height: 1em;
    border: 2px solid #ff6600;
    font-weight: bold;
    border-radius: 10px;
    display: inline-grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, auto));
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
    font-weight: bold;
    border-radius: 10px;
  }
`;





const TopNav = () => {
  const {
    isAuthenticated
  } = useAuth0();
 
  return (
    <Topbarbase>
      <SideNav />
      <NavLogo>
        <Link to="/"></Link>
      </NavLogo>
   
        {!isAuthenticated && (
        <NavLinks>
          <LoginButton />
          </NavLinks>
        )}
        {isAuthenticated && (
          <NavLinks>
            <LogoutButton />
        </NavLinks>
        )}

    </Topbarbase>
  );
};

export default TopNav;
