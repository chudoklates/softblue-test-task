import React from "react";
import styled from "styled-components";
import HeaderAndHero from "./HeaderAndHero";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  min-width: 760px;
  padding: 0 20%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <HeaderAndHero />
      <Wrapper>{children}</Wrapper>
    </React.Fragment>
  );
};

export default Layout;
