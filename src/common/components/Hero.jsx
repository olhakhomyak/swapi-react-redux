import React from 'react';

import GrommetHero from 'grommet/components/Hero';

class Hero extends React.PureComponent {
  render() {
    return <GrommetHero {...this.props} />;
  }
}

export default Hero;
