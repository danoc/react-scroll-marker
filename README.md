# `react-scroll-marker`

[![NPM version](https://badgen.net/npm/v/react-scroll-marker)](https://www.npmjs.com/package/react-scroll-marker) [![Build status](https://badgen.net/travis/danoc/react-scroll-marker)](https://travis-ci.com/danoc/react-scroll-marker) [![Code coverage](https://badgen.net/codecov/c/github/danoc/react-scroll-marker)](https://codecov.io/gh/danoc/react-scroll-marker) [![Bundle size](https://badgen.net/bundlephobia/min/react-scroll-marker?label=size)](https://bundlephobia.com/result?p=react-scroll-marker) [![Bundle size](https://badgen.net/bundlephobia/minzip/react-scroll-marker?label=gzip%20size)](https://bundlephobia.com/result?p=react-scroll-marker)

## Usage example

```jsx
import {
  ScrollMarkerContainer,
  ScrollMarkerLink,
  ScrollMarkerSection
} from "react-scroll-marker";

const Page = () => (
  <ScrollMarkerContainer>
    <nav>
      <ScrollMarkerLink id="overview">
        {({ isActive, onClick }) => (
          <a
            href="/about/#overview"
            onClick={onClick}
            style={{ fontWeight: isActive ? "bold" : "normal" }}
          >
            Overview
          </a>
        )}
      </ScrollMarkerLink>
      <ScrollMarkerLink id="history">
        {({ isActive, onClick }) => (
          <a
            href="/about/#history"
            onClick={onClick}
            style={{ fontWeight: isActive ? "bold" : "normal" }}
          >
            History
          </a>
        )}
      </ScrollMarkerLink>
    </nav>
    <main>
      {/*
        Generates a `div` with an `id` of overview. It accepts all attributes
        as well as an `is` prop that can be used to change the element.
      */}
      <ScrollMarkerSection id="overview">
        <h2>Overview</h2>
        <p>…</p>
      </ScrollMarkerSection>

      {/*
        Can also accept a function as `children`. In this mode, the component
        does not render its own HTML. The `id` is passed to the `children` as
        a small convenience. This method is useful if you need specific control
        over the rendered HTML.
      */}
      <ScrollMarkerSection id="history">
        {({ id }) => (
          <React.Fragment>
            <h2 id={id}>History</h2>
            <p>…</p>
          </React.Fragment>
        )}
      </ScrollMarkerSection>
    </main>
  </ScrollMarkerContainer>
);
```
