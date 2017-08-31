import React from 'react';
import PropTypes from 'prop-types';

import GrommetHeader from 'grommet/components/Header';

class Header extends React.PureComponent {
  render() {
    return (
      <GrommetHeader>
        {this.props.children}
      </GrommetHeader>
    );
  }
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Header.defaultProps = {
  children: [],
};

export default Header;
