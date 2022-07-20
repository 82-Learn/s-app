import React, { useState, useEffect } from "react";
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

export default function Contact() {
  const [myArray, setMyArray] = useState([]);

  const getMyData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/type");
    const data = await response.json();
    const names = data.results.map((r) => r.name); // extracting 'name' prop into array of names

    setMyArray(names);
  };

  useEffect(() => {
    getMyData();
  }, []);

  return (
    <BaseComponent>
      <h1>get Data</h1>
      {myArray.map((value, index) => (
        <li key={`${index}-${value}`}>{value}</li>
      ))}
    </BaseComponent>
  );
}
