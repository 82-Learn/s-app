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
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  padding: 100px 10px;
  color: black;
  flex-wrap: wrap;
`;

const Dash = () => {
  return (
    <BaseComponent>
      <h2>MY APP DASHBOARD</h2>
    </BaseComponent>
  );
};

export default Dash;
