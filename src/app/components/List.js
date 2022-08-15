import React from "react";
import PropTypes from "prop-types";

export default class List extends React.Component {
  static propTypes = {
    items: PropTypes.array,
    ariaLabel: PropTypes.string,
    completeTodoCallback: PropTypes.func,
  };

  static defaultProps = {
    items: [],
    completeTodoCallback: () => {},
  };

  render() {
    const { items, ariaLabel, completeTodoCallback } = this.props;

    return (
      <ul aria-label={ariaLabel}>
        {items?.map((item) => (
          <li key={item.id} aria-describedby={`listitem-id-${item.id}`}>
            <p aria-label="text" role="article">
              {item.text}
            </p>
            <button
              aria-label={`complete-${item.id}`}
              onClick={() => completeTodoCallback(item.id)}
            >
              Complete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
