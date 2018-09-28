import React from 'react';
import PropTypes from 'prop-types';

export default class FooterLink extends React.Component {
  render() {
    const { active, children, onClick, filter = '' } = this.props;
    if (active) {
      return <span>{children}</span>;
    }
    return (
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          onClick(filter);
        }}
      >
        {children}
      </a>
    );
  }
}

FooterLink.propTypes = {
  // active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
  // onClick: PropTypes.func.isRequired
};
