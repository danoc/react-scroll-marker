import React from "react";
import PropTypes from "prop-types";

const Context = React.createContext();
const { Provider } = Context;

class HashContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeId: null
    };

    this.setActive = this.setActive.bind(this);
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

HashContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default HashContainer;
export { Context };
