import React from 'react';

import GrommetMenu from 'grommet/components/Menu';

class Menu extends React.Component {
  render() {
    return <GrommetMenu {...this.props} />;
  }
}

Menu.defaultProps = {
  inline: false,
  dropAlign: {
    right: 'right',
    top: 'top',
  },
};

export default Menu;
