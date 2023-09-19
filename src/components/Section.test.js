import { cleanup, screen } from "@testing-library/react";
import Section from "./Section";
import customRender from "../utils/render";

afterEach(cleanup);

const title = "Section title";
const content = "Section content";
const subtitle = "Section subtitle";

const props = {
  title,
  content,
  subtitle,
};

describe("Section", () => {
  it("Section should display section title, subtitle, content and children", () => {
    customRender(
      <Section {...props}>
        <div data-testid="child-element" />
      </Section>
    );

    expect(
      screen.getByRole("heading", {
        name: /section title/i,
      })
    ).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: /section subtitle/i,
      })
    ).toBeVisible();
    expect(screen.getByText("Section content")).toBeVisible();
    expect(screen.getByTestId("child-element")).toBeVisible();
  });

  it("should not display content if none was provided", () => {
    const { queryByTestId } = customRender(
      <Section {...{ ...props, content: "" }} />
    );

    expect(queryByTestId("section-content")).toBeNull();
  });
});
