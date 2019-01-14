import React from "react";
import PropTypes from "prop-types";

import { Context } from "./container";

class Link extends React.Component {
  render() {
    const { to, children } = this.props;
    const { activeId, setActive } = this.context;

    const isActive = to === activeId;

    return children({
      isActive,
      to,
      onClick: () => {
        setActive(to);
      }
    });
  }
}

Link.contextType = Context;

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
};

export default Link;
