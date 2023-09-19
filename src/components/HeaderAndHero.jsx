import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Hero from "./Hero";
import { StaticImage } from "gatsby-plugin-image";

const BackgroundWrapper = styled.div`
  display: grid;
  background: ${({ theme }) => theme.colors.background};
`;

const HeroWrapper = styled.div`
  grid-area: 1/1;
  position: relative;
  padding-top: 62px;
`;

const HeaderAndHero = () => {
  return (
    <BackgroundWrapper>
      <StaticImage
        src={`../assets/images/bg.webp`}
        layout="fullWidth"
        objectFit="contain"
        alt=""
        style={{ gridArea: "1/1" }}
      />
      <HeroWrapper>
        <Header />
        <Hero />
      </HeroWrapper>
    </BackgroundWrapper>
  );
};

export default HeaderAndHero;
