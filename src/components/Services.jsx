import React from "react";
import styled from "styled-components";
import LaptopIcon from "./LaptopIcon";

const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 90px;
  justify-content: space-evenly;
  margin-top: 79px;
`;

const IconBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100px;
  height: 100px;
  margin-bottom: 34px;
`;

const ServiceDescription = styled.p`
  font-size: 15px;
  margin: 34px 0 0;
  line-height: 28px;
  font-weight: 400px;
`;

/**
 *
 * @param {{ services: import('../types').Service[] }} props
 * @returns
 */
const Services = ({ services }) => {
  return (
    <ServicesWrapper>
      {services.map(({ id, name, description }) => (
        <div key={id}>
          <IconBackground>
            <LaptopIcon />
          </IconBackground>
          <h4>{name.toUpperCase()}</h4>
          <ServiceDescription>{description}</ServiceDescription>
        </div>
      ))}
    </ServicesWrapper>
  );
};

export default Services;
