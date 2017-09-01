import React from 'react';

import GrommetHeadline from 'grommet/components/Headline';

class Headline extends React.PureComponent {
  render() {
    return <GrommetHeadline {...this.props} />;
  }
}

export default Headline;
