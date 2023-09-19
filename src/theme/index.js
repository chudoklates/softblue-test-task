import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    background: "#06101a",
    border: "#cfcfcf",
    text: "#fafafa",
    textSecondary: "#777777",
    primary: "#00bcd4",
    offWhite: "#d7d7d7",
  },
  typo: {
    fontSizeBase: "16px",
  },
  breakpoints: {
    lg: "@media (min-width: 1200px)",
  },
};

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: "Poppins","MyriadPro Regular",sans-serif;
    font-size:  ${({ theme }) => theme.typo.fontSizeBase};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    letter-spacing: 0;
    margin: 0;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h2 {
    font-size: 60px;
    font-weight: 700;
    line-height: 72px;
    margin: 0 0 39px;
  }

  h3 {
    font-size: 36px;
    margin: unset;
  }

  h4 {
    font-size: 24px;
    margin: unset;
  }

  h5 {
    font-size: 20px;
    margin: unset;
  }

  li {
    padding: 6px 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
      color: ${({ theme }) => theme.colors.primary}
    }

    a:visited {
      color: unset;
    }
  }
`;

export default GlobalStyle;
