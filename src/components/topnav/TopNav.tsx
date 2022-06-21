import * as React from "react";
import styled from "styled-components";
import SideNav from "../sidebar/SideNav";
import { Link } from "react-router-dom";
import myImage from '../../assets/favicon.png';

const Topbarbase = styled.nav`
   background: transparent;
   top: 0;
   background-color: rgb(26, 26, 26);

   font-size: 1rem;
   display: flex;
   position: sticky;

   z-index: 10;
`;


const Wrapper = styled.div`
  
   display: flex;

    

`;

const NavLinks = styled.ul`
  & a {
    margin-left: 20px;
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

const TopNav = () => {
    return (
        <Topbarbase>
            <SideNav />
            <NavLogo>
                <Link to="/"></Link>
            </NavLogo>
            <NavLinks>
                <Wrapper>
                    <Link to="/">Login</Link>  
                    <Link to="/">Register</Link>
                </Wrapper>
            </NavLinks>
        </Topbarbase>
    );
};

export default TopNav;



