import React from 'react';

import GrommetImage from 'grommet/components/Image';

class Image extends React.PureComponent {
  render() {
    return <GrommetImage {...this.props} />;
  }
}

export default Image;
