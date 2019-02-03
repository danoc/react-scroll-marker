# react-scroll-marker

[![NPM version](https://badgen.net/npm/v/react-scroll-marker)](https://www.npmjs.com/package/react-scroll-marker) [![Build status](https://badgen.net/travis/danoc/react-scroll-marker)](https://travis-ci.com/danoc/react-scroll-marker) [![Code coverage](https://badgen.net/codecov/c/github/danoc/react-scroll-marker)](https://codecov.io/gh/danoc/react-scroll-marker) [![Bundle size](https://badgen.net/bundlephobia/min/react-scroll-marker?label=size)](https://bundlephobia.com/result?p=react-scroll-marker) [![Bundle size](https://badgen.net/bundlephobia/minzip/react-scroll-marker?label=gzip%20size)](https://bundlephobia.com/result?p=react-scroll-marker)

> Indicate the active section of a page based on scroll position.

## Install

You can install `react-scroll-marker` with NPM or Yarn.

```bash
npm install react-scroll-marker --save-exact
```

```bash
yarn add react-scroll-marker --exact
```

We encourage pinning the version number until `react-scroll-marker` reaches `1.0.0`. We may ship breaking changes in `0.x.x` versions.

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
      <ScrollMarkerSection id="overview">
        {({ id }) => (
          <section>
            <h2 id={id}>Overview</h2>
            <p>…</p>
          </section>
        )}
      </ScrollMarkerSection>

      <ScrollMarkerSection id="history">
        {({ id }) => (
          <section>
            <h2 id={id}>History</h2>
            <p>…</p>
          </section>
        )}
      </ScrollMarkerSection>
    </main>
  </ScrollMarkerContainer>
);
```

## API

This package exports three components: `ScrollMarkerContainer`, `ScrollMarkerLink`, and `ScrollMarkerSection`. Here's the documentation for each.

### `ScrollMarkerContainer`

The outermost container that wraps the `ScrollMarkerLink` and `ScrollMarkerSection` components. This component exists so that the other two components can communicate.

#### Props

| Prop       | Type             | Description                                                                                                                       |
| ---------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `children` | `node`, required | The navigation and content on your page. The `children` should include instances of `ScrollMarkerLink` and `ScrollMarkerSection`. |

### `ScrollMarkerLink`

This component wraps each nav item and tells you whether the nav item is active.

#### Props

| Prop       | Type               | Description                                                                                                                                                                                                                                                                                                                              |
| ---------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` | `func`, required   | This component expects a function as the `children`. The function will receive an object with two properties: `isActive` and `onClick`. `isActive` is a boolean that indicates whether the nav item is currently being viewed. `onClick` is a function that should be passed to the anchor tag. It makes the highlighting more reliable. |
| `id`       | `string`, required | The `id` of the section that corresponds to the nav item. There should be a corresponding `ScrollMarkerSection` with the same `id`.                                                                                                                                                                                                      |

### `ScrollMarkerSection`

This component wraps sections of content on a page. It communicates with `ScrollMarkerContainer` as users scroll, firing events when a new section comes into view.

#### Props

| Prop       | Type               | Description                                                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` | `func`, required   | This component expects a function as the `children`. The function will receive an object with a single `id` property. The `id` should then be passed to a heading in the section. You'll notice that the value of the `id` is the same as the string passed in as the `id` prop. We provide it as a small convenience so that consumers don't need to duplicate it in two places. |
| `id`       | `string`, required | The `id` of the section on the page. There should be a corresponding `ScrollMarkerLink` with the same `id`.                                                                                                                                                                                                                                                                       |
