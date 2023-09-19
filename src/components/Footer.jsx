import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  text-align: center;
  padding: 22px 0;

  & span {
    font-weight: 600;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      Copyright © 2019 <span>Robi-pixel</span> All Right Reserved.
    </StyledFooter>
  );
};

export default Footer;
