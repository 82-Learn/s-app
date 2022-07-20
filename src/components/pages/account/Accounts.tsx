import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { API } from "aws-amplify";

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

export default function Accounts() {
  const [greeting, setGreeting] = useState("loading");
  useEffect(() => {
    fetchGreeting();
  }, []);
  async function fetchGreeting() {
    const greetingData = await API.get("Goapi", "/accounts", {});
    setGreeting(greetingData.message);
  }
  return (
    <BaseComponent>
      <h2>{greeting}</h2>
    </BaseComponent>
  );
}
