import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 5%;
  align-items: flex-start;
  padding-top: 55px;

  ${({ theme }) => theme.breakpoints.lg} {
    & {
      padding-left: 20%;
    }
  }
`;

const ColoredSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const TextWrapper = styled.div`
  padding-top: 30px;

  ${({ theme }) => theme.breakpoints.lg} {
    & {
      padding-top: 163px;
    }
  }
`;

const ImageWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.breakpoints.lg} {
    & {
      display: block;
    }
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <TextWrapper>
        <h5>Hello!</h5>
        <br />
        <h2>
          I am <ColoredSpan>HRS</ColoredSpan> Pathan
          <br />
          Creative UI/UX Designer
        </h2>
        <ol>
          <li>UI/UX Design</li>
          <li>Product Design</li>
          <li>Web Design</li>
          <li>Front-end Design</li>
        </ol>
      </TextWrapper>
      <ImageWrapper>
        <StaticImage
          src={`../assets/images/model.webp`}
          alt="Male person looking ahead"
          height={835}
          width={620}
          placeholder="blurred"
        />
      </ImageWrapper>
    </HeroWrapper>
  );
};

export default Hero;
