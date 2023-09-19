import { cleanup, screen } from "@testing-library/react";
import Header from "./Header";
import customRender from "../utils/render";

afterEach(cleanup);

describe("Header", () => {
  it("should display link texts", () => {
    customRender(<Header />);

    expect(screen.getByRole("link", { name: /home/i })).toBeVisible();
    expect(screen.getByRole("link", { name: /services/i })).toBeVisible();
    expect(screen.getByRole("link", { name: /experience/i })).toBeVisible();
    expect(screen.getByRole("link", { name: /comments/i })).toBeVisible();
  });
});
