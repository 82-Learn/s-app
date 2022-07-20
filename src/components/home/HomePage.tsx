import * as React from "react";
import styled from "styled-components";
import { Card } from "./card";
import img1 from "../../assets/img1.png";

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

const HomePage = () => {
  return (
    <BaseComponent>
      <h2>82 PAY</h2>
      <CardContainer>
        <Card
          title={"A"}
          text={"Transfer using blockchain"}
          date={1}
          imgUrl={img1}
        />
        <Card title={"B"} text={"Pay"} date={2} imgUrl={img1} />
        <Card
          title={"C"}
          text={"Cost reduction by amount"}
          date={2}
          imgUrl={img1}
        />
      </CardContainer>
    </BaseComponent>
  );
};

export default HomePage;
