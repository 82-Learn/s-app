import * as React from "react";
import { SidebarItem } from "./models/SidebarItem";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineHome } from "react-icons/ai";
import { BiTestTube } from "react-icons/bi";
import { FaCog } from "react-icons/fa";

export const SidebarData: SidebarItem[] = [
  {
    title: "ACCOUNTS DEMO",
    path: "/accounts",
    icon: <AiOutlineHome />,
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
  },
  {
    title: "TERMS",
    path: "/terms",
    icon: <FaCog />,
  },
  {
    title: "ABOUT",
    path: "/about-us",
    icon: <BiTestTube />,
  },
  {
    title: "CONTACT",
    path: "/contact-us",
    icon: <BiTestTube />,
  },
];
