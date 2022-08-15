import React from "react";
import PropTypes from "prop-types";

export default class List extends React.Component {
  static propTypes = {
    items: PropTypes.array,
    ariaLabel: PropTypes.string,
    renderItem: PropTypes.func
  };

  static defaultProps = {
    items: [],
  };

  render() {
    const { items, ariaLabel, renderItem } =
      this.props;

    return (
      <ul aria-label={ariaLabel}>
        {items?.map((item) => (
          <li key={item.id}>
            {renderItem && renderItem(item)}
            {!renderItem && item.text}
          </li>
        ))}
      </ul>
    );
  }
}
