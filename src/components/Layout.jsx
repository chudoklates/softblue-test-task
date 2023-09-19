import React from "react";
import styled from "styled-components";
import HeaderAndHero from "./HeaderAndHero";
import CommentsList from "./CommentsList";
import CommentForm from "./CommentForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 0 5%;
  min-width: 760px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  ${({ theme }) => theme.breakpoints.lg} {
    & {
      padding: 0 20%;
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <HeaderAndHero />
      <Wrapper>
        {children}
        <CommentsList />
        <CommentForm />
      </Wrapper>
    </React.Fragment>
  );
};

export default Layout;
