import React from 'react';

import GrommetHeading from 'grommet/components/Heading';

class Heading extends React.PureComponent {
  render() {
    return <GrommetHeading {...this.props} />;
  }
}

Heading.defaultProps = {
  uppercase: true,
  margin: 'none',
  tag: 'h2',
  strong: true,
};

export default Heading;
