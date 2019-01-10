import React from "react";
import PropTypes from "prop-types";
import Waypoint from "react-waypoint";

import { Context } from "./container";

const Section = props => {
  const { id, is, ...rest } = props;
  const Container = is;

  return (
    <Context.Consumer>
      {({ setActive }) => (
        <React.Fragment>
          <Waypoint onEnter={() => setActive(id)} />
          <Container id={id} {...rest} />
        </React.Fragment>
      )}
    </Context.Consumer>
  );
};

Section.propTypes = {
  is: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  id: PropTypes.string.isRequired
};

Section.defaultProps = {
  is: "div"
};

export default Section;
