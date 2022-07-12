import * as React from "react";
import styled from "styled-components";

//import { Amplify } from "aws-amplify";
//import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
//import awsconfig from "../../../aws-exports";

//Amplify.configure(awsconfig);

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
  //<AmplifyAuthenticator>
  <BaseComponent>
    <h1>Redirect here to dash</h1>
    <p>Hello</p>
  </BaseComponent>
  // </AmplifyAuthenticator>
);

export default LoginPage;
