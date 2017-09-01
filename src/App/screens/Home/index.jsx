import React from 'react';
import PropTypes from 'prop-types';

import Headline from '../../../common/components/Headline';
import Image from '../../../common/components/Image';
import Hero from '../../../common/components/Hero';
import Box from '../../../common/components/Box';
// import Section from '../../../common/components/Section';
import TypeAhead from './components/TypeAhead';

import hero from './assets/hero.jpg';

class Home extends React.PureComponent {
  render() {
    console.log(this.props.searchResult); // eslint-disable-line no-console

    return (
      <section>
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
        {/* <Section>

        </Section> */}
      </section>
    );
  }
}

Home.propTypes = {
  searchResult: {
    count: PropTypes.number,
    next: PropTypes.string,
    previous: PropTypes.string,
    results: PropTypes.array,
  },
};

Home.defaultProps = {
  searchResult: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
};

export default Home;
