import React from "react";
import PropTypes from "prop-types";

export default class List extends React.Component {
  static propTypes = {
    items: PropTypes.array,
    ariaLabel: PropTypes.string,
    renderItem: PropTypes.func,
    className: PropTypes.string,
    itemClassName: PropTypes.string,
  };

  static defaultProps = {
    items: [],
    ariaLabel: "",
    className: "",
    itemClassName: ""
  };

  render() {
    const {items, ariaLabel, renderItem, className, itemClassName, children} =
        this.props;

    return (
        <ul aria-label={ariaLabel} className={className}>
          {items?.map((item) => (
              <li className={itemClassName} key={item.id}>
                {children && children(item)}
                {!children && item.text}
              </li>
          ))}
        </ul>
    );
  }
}
