import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { render } from "@testing-library/react";

const TestProviders = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: TestProviders, ...options });

export default customRender;
