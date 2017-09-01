import React from 'react';

import GrommetHeader from 'grommet/components/Header';

class Header extends React.PureComponent {
  render() {
    return <GrommetHeader {...this.props} />;
  }
}

export default Header;
