import React from "react";
import PropTypes from "prop-types";
import { Waypoint } from "react-waypoint";

import { Context } from "./container";

const Section = props => {
  const { id, children } = props;

  return (
    <Context.Consumer>
      {({ setActive }) => (
        <React.Fragment>
          <Waypoint
            onEnter={({ event }) => {
              // We only want to mark a section as active if the section is
              // scrolled into view. `Waypoint`, by default, fires events on
              // resize, mount, and re-render.
              if (event) {
                setActive(id);
              }
            }}
          />

          {children({ id })}
        </React.Fragment>
      )}
    </Context.Consumer>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
};

export default Section;
