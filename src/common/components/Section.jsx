import React from 'react';

import GrommetSection from 'grommet/components/Section';

class Section extends React.PureComponent {
  render() {
    return <GrommetSection {...this.props} />;
  }
}

export default Section;
