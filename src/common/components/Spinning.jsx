import React from 'react';

import GrommetSpinning from 'grommet/components/icons/Spinning';

class Spinning extends React.Component {
  render() {
    return <GrommetSpinning {...this.props} />;
  }
}

Spinning.defaultProps = {
  size: 'small',
};

export default Spinning;
