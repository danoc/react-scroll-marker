import React from "react";
import PropTypes from "prop-types";

import { Context } from "./container";

class Link extends React.Component {
  render() {
    const { id, children } = this.props;
    const { activeId, setActive } = this.context;

    const isActive = id === activeId;

    return children({
      isActive,
      onClick: () => {
        setActive(id);
      }
    });
  }
}

Link.contextType = Context;

Link.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
};

export default Link;
