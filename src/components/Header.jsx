import React from "react";
import { Link } from "gatsby-link";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import CTA from "./CTA";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20%;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavLink = styled(Link)`
  display: block;
  padding: 15px 29px;
  font-weight: 500;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StaticImage
        src={`../assets/images/place_your_logo.webp`}
        alt="Site logo"
        height={35}
        placeholder="blurred"
        layout="fixed"
      />
      <StyledNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <CTA to="#comment">Comments</CTA>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
