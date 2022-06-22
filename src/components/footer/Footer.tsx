import * as React from "react";
import styled from "styled-components";
import moment from "moment";

const StyledFooter = styled.div`
  background-color: rgb(26, 26, 26);
  min-height: 10%;
  /* equal to footer height */
  margin-bottom: -142px;
  color: white;
  width: 100%;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 25%));
  grid-gap: 50px;
  padding-left: 130px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 0 auto;
  margin-right: 0 auto;
  align-items: center;
`;

const Heading = styled.h5`
  font-size: 15px;
  margin-bottom: 40px;
  text-align: center;
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 0 auto;
  margin: 0 auto;
`;

const FooterLink2 = styled.div`
  color: white;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  text-align: center;
  padding: 8px 18px;
  line-height: 1.6;
`;

const Copyright = styled.div`
  max-width: 0 auto;
  display: flex;
  margin-left: 20px;
`;

const Footer = () => (
  <StyledFooter>
    <Container>
      <Row>
        <Column>
          <Heading>ABOUT 82 </Heading>
          <FooterLink2>information 1</FooterLink2>
          <FooterLink2>information 2</FooterLink2>
        </Column>
        <Column>
          <Heading>CONTACT 82 </Heading>
          <FooterLink2>information 1</FooterLink2>
          <FooterLink2>information 2</FooterLink2>
        </Column>
        <Column>
          <Heading>ABOUT 82</Heading>
          <FooterLink2>information 1</FooterLink2>
          <FooterLink2>information 2</FooterLink2>
        </Column>
      </Row>
      <Copyright>
        <p>Copyright &copy; 82 Learn Pty Ltd {moment().format("YYYY")}.</p>
      </Copyright>
    </Container>
  </StyledFooter>
);

export default Footer;
