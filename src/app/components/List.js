import React from "react";
import PropTypes from "prop-types";

export class List extends React.Component {
  static propTypes = {
    items: PropTypes.array
  }

  static defaultProps = {
    items: []
  }

  render() {
    const { items } = this.props;

    return (
      <ul data-testid="todosReducer-list-component">
        {items?.map((item) => (
          <li key={item.id} data-testid={`todosReducer-${item.id}`}>
            {item.text}
          </li>
        ))}
      </ul>
    );
  }
}
