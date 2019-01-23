import React from "react";
import PropTypes from "prop-types";

const Context = React.createContext();
const { Provider } = Context;

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeId: null
    };

    this.setActive = this.setActive.bind(this);
  }

  componentDidMount() {
    if (
      // https://github.com/akiran/can-use-dom
      typeof window !== "undefined" &&
      window.document &&
      window.document.createElement &&
      // Check to see if there is a hash.
      window.location &&
      window.location.hash
    ) {
      this.setActive(window.location.hash.replace("#", ""));
    }
  }

  setActive(id) {
    this.setState({
      activeId: id
    });
  }

  render() {
    const { activeId } = this.state;
    const { children } = this.props;

    return (
      <Provider value={{ activeId, setActive: this.setActive }}>
        {children}
      </Provider>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
export { Context };
