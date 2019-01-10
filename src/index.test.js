import React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import { HashContainer, HashLink, HashSection } from "./index";

afterEach(cleanup);

describe("HashLink", () => {
  test("turns `id` into an `href`", () => {
    const id = "overview";

    const { getByText } = render(
      <HashContainer>
        <HashLink id={id}>
          {({ href, onClick }) => (
            <a href={href} onClick={onClick}>
              Overview
            </a>
          )}
        </HashLink>
      </HashContainer>
    );

    const anchor = getByText("Overview");
    expect(anchor.getAttribute("href")).toBe(`#${id}`);
  });

  test("sets active section when clicked", () => {
    const { getByText } = render(
      <HashContainer>
        <HashLink id="overview">
          {({ isActive, href, onClick }) => (
            <a
              href={href}
              onClick={onClick}
              data-testid="click-here"
              data-test-is-active={isActive}
            >
              Overview
            </a>
          )}
        </HashLink>
      </HashContainer>
    );

    const anchor = getByText("Overview");
    expect(anchor.getAttribute("data-test-is-active")).toBe("false");
    fireEvent.click(anchor);
    expect(anchor.getAttribute("data-test-is-active")).toBe("true");
  });
});

describe("HashSection", () => {
  test("renders a `div` by default", () => {
    const { getByText } = render(
      <HashContainer>
        <HashSection id="goose">Overview</HashSection>
      </HashContainer>
    );
    expect(getByText("Overview").tagName).toBe("DIV");
  });

  test("can be customized to render a `div`", () => {
    const { getByText } = render(
      <HashContainer>
        <HashSection is="marquee" id="goose">
          Overview
        </HashSection>
      </HashContainer>
    );

    expect(getByText("Overview").tagName).toBe("MARQUEE");
  });

  test("spreads arbitrary props on root element", () => {
    const { getByText } = render(
      <HashContainer>
        <HashSection id="example" data-duck-duck="goose">
          Overview
        </HashSection>
      </HashContainer>
    );

    expect(getByText("Overview").getAttribute("data-duck-duck")).toBe("goose");
  });
});
