import * as React from "react";
import styled from "styled-components";

const BaseComponent = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(20px + 3vmin);
  color: white;
  background-color: black;
`;

const LoginPage = () => (
  <BaseComponent>
    <h1>UNDER DEV!</h1>
    <p>currently typing...</p>
  </BaseComponent>
);

export default LoginPage;
