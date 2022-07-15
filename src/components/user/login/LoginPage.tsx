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

const LoginPage = () => {
  return (
    <BaseComponent>
      <h2>SIGN IN HERE</h2>
    </BaseComponent>
  );
};
export default LoginPage;
