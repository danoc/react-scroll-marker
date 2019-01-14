# react-scroll-marker

[![Build status](https://badgen.net/travis/danoc/react-scroll-marker)](https://travis-ci.com/danoc/react-scroll-marker) [![Code coverage](https://badgen.net/codecov/c/github/danoc/react-scroll-marker)](https://codecov.io/gh/danoc/react-scroll-marker)

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
        Generates a `div` with an `id` of overview. It accepts
        all attributes as well as an `is` prop that can be used
        to change the element.
      */}
      <ScrollMarkerSection id="overview">
        <h2>Overview</h2>
        <p>…</p>
      </ScrollMarkerSection>

      <ScrollMarkerSection id="history">
        <h2>History</h2>
        <p>…</p>
      </ScrollMarkerSection>
    </main>
  </ScrollMarkerContainer>
);
```
