import React from "react";
import Services from "../components/Services";
import Section from "../components/Section";
import Experience from "../components/Experience";

/**
 *
 * @param {import('gatsby').PageProps<any, import('../types').HomeContext>} props
 * @returns
 */
const Home = ({ pageContext }) => {
  const { experience, services } = pageContext;

  return (
    <main>
      <Section
        content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has"
        subtitle="What we do"
        title="Better Services For You"
      >
        <Services services={services} />
      </Section>
      <Section
        content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has"
        subtitle="Qualification"
        title="My Experience"
      >
        <Experience experience={experience} />
      </Section>
    </main>
  );
};

export default Home;

Home.defaultProps = {
  pageContext: {
    experience: [],
    services: [],
  },
};

export const Head = () => <title>Homepage</title>;
