import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Button = styled.button`
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
`;

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;
