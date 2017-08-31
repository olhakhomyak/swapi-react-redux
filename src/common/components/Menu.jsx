import React from 'react';
import PropTypes from 'prop-types';

import GrommetMenu from 'grommet/components/Menu';

class Menu extends React.PureComponent {
  render() {
    return (
      <GrommetMenu
        inline={false}
        label={this.props.label}
        dropAlign={{ right: 'right', top: 'top' }}
      >
        {this.props.children}
      </GrommetMenu>
    );
  }
}

Menu.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Menu.defaultProps = {
  label: '',
  children: [],
};

export default Menu;
