import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 130px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColouredHeader = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

const ContentWrapper = styled.p`
  max-width: 738px;
`;

/**
 *
 * @param {import('../types').SectionProps} props
 * @returns
 */
const Section = ({ children, content, subtitle, title }) => {
  return (
    <Wrapper>
      <ColouredHeader>{subtitle}</ColouredHeader>
      <h3>{title}</h3>
      {content ? <ContentWrapper>{content}</ContentWrapper> : null}
      {children}
    </Wrapper>
  );
};

export default Section;
