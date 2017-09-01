import React from 'react';

import GrommetBox from 'grommet/components/Box';

class Box extends React.PureComponent {
  render() {
    return <GrommetBox {...this.props} />;
  }
}

export default Box;
