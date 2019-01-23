import React from "react";
import PropTypes from "prop-types";
import Waypoint from "react-waypoint";

import { Context } from "./container";

const Section = props => {
  const { id, is, children, ...rest } = props;
  const Container = is;

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

          {typeof children === "function" ? (
            children({ id })
          ) : (
            <Container id={id} {...rest}>
              {children}
            </Container>
          )}
        </React.Fragment>
      )}
    </Context.Consumer>
  );
};

Section.propTypes = {
  is: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
};

Section.defaultProps = {
  is: "div"
};

export default Section;
