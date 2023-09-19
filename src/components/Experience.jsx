import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const ExperienceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: space-evenly;
  margin-top: 79px;
`;

const ExperienceItem = styled.div`
  padding: 50px;
  box-shadow: 0 0 30px rgba(6, 16, 26, 0.75);
  text-align: left;
`;

const Heading = styled.div`
  display: flex;
  align-content: center;
  column-gap: 30px;
`;

const Company = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin: unset;
`;

const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 15px;
  margin: unset;
`;

/**
 *
 * @param {{ experience: import('../types').Experience[] }} props
 * @returns
 */
const Experience = ({ experience }) => {
  // Sort experience by newest first
  experience.sort((a, b) => new Date(b.from) - new Date(a.from));

  return (
    <ExperienceWrapper>
      {experience.map(({ id, company, description, from, to }) => (
        <ExperienceItem key={id}>
          <Heading>
            <StaticImage
              src="../assets/images/be-icon.webp"
              width={40}
              height={40}
              layout="fixed"
              alt="Be"
            />
            <div>
              <Company>{company}</Company>
              <Subtitle>
                {from} - {to ?? "Now"}
              </Subtitle>
            </div>
          </Heading>
          <p>{description}</p>
        </ExperienceItem>
      ))}
    </ExperienceWrapper>
  );
};

export default Experience;
