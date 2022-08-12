import React from "react";
import PropTypes from "prop-types";

export default class List extends React.Component {
  static propTypes = {
    items: PropTypes.array,
    ariaLabel: PropTypes.string
  }

  static defaultProps = {
    items: []
  }

  render() {
    const { items, ariaLabel } = this.props;

    return (
      <ul aria-label={ariaLabel}>
        {items?.map((item) => (
          <li key={item.id} aria-describedby={`listitem-id-${item.id}`}>
            {item.text}
          </li>
        ))}
      </ul>
    );
  }
}
