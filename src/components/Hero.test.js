import { cleanup, screen } from "@testing-library/react";
import Hero from "./Hero";
import customRender from "../utils/render";

afterEach(cleanup);

describe("Hero", () => {
  it("should display hero text", () => {
    customRender(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: /hello!/i,
      })
    ).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: /i am hrs pathan creative ui\/ux designer/i,
      })
    ).toBeVisible();
    expect(screen.getByText("UI/UX Design")).toBeVisible();
    expect(screen.getByText("Product Design")).toBeVisible();
    expect(screen.getByText("Web Design")).toBeVisible();
    expect(screen.getByText("Front-end Design")).toBeVisible();
  });
});
