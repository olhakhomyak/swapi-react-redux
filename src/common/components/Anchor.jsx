import React from 'react';

import GrommetAnchor from 'grommet/components/Anchor';

class Anchor extends React.PureComponent {
  render() {
    return <GrommetAnchor {...this.props} />;
  }
}

Anchor.defaultProps = {
  align: 'end',
  reverse: true,
};

export default Anchor;
