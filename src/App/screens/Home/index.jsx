import React from 'react';

import Headline from '../../../common/components/Headline';
import Image from '../../../common/components/Image';
import Hero from '../../../common/components/Hero';
import Box from '../../../common/components/Box';
import TypeAhead from './components/TypeAhead';

import hero from './assets/hero.jpg';

class Home extends React.Component {
  render() {
    return (
      <Hero
        background={
          <Image
            src={hero}
            fit="cover"
            full
          />
        }
        backgroundColorIndex="dark"
        size="large"
      >
        <Box>
          <Headline
            margin="none"
            size="xlarge"
            strong
          >
            <TypeAhead sentence="FEEL THE FORCE" />
          </Headline>
        </Box>
      </Hero>
    );
  }
}

export default Home;
