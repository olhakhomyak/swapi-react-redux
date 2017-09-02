import React from 'react';

import GrommetHero from 'grommet/components/Hero';

class Hero extends React.Component {
  render() {
    return <GrommetHero {...this.props} />;
  }
}

export default Hero;
