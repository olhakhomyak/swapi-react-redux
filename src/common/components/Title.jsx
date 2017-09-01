import React from 'react';

import GrommetTitle from 'grommet/components/Title';

class Title extends React.PureComponent {
  render() {
    return <GrommetTitle {...this.props} />;
  }
}

export default Title;
