import * as React from "react";
import { FC, useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { SidebarData } from "./SidebarData";
import { Submenu } from "./Submenu";
import imgUrl from "../sidebar/assets/img1.png";

const SidebarNav = styled.div<{ sidebar: boolean }>`
  position: absolute;
  left: 0;
  top: 11px;
  bottom: 0px;
  width: 20%;
  min-width: 200px;
  opacity: 1;
  z-index: 999;
  padding: 5.5em 0.1em;
  transition: transform 300ms;
  border-radius: 20px;
  cursor: pointer;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  @media (max-width: 124px) {
    width: 80%;
  }
`;
export const CardImage = styled.div<{ background: string }>`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-size: cover;
  border-radius: 20px;
`;

const NavIcon = styled.div`
  font-size: 2.1rem;
  margin-left: 2rem;
  line-height: 2em;
  padding: 16px 16px;
  border-radius: 5px;
  float: left;

  cursor: pointer;
`;

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <NavIcon
          onMouseEnter={() => setSidebar(true)}
          onTouchStart={() => setSidebar(true)}
        >
          <GiHamburgerMenu />
        </NavIcon>
        <SidebarNav sidebar={sidebar} onMouseLeave={() => setSidebar(false)}>
          <CardImage background={imgUrl}>
            <div onClick={() => setSidebar(false)}>
              {SidebarData.map((item, index) => {
                return <Submenu item={item} key={index} />;
              })}
            </div>
          </CardImage>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
