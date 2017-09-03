import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../components/Section';
import Headline from '../../components/Headline';
import Box from '../../components/Box';

class Error extends React.Component {
  render() {
    return (
      <Section>
        <Box align="center">
          <Headline align="center">
            Oops! We cannot find {this.props.location.pathname}
          </Headline>
        </Box>
      </Section>
    );
  }
}

Error.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Error;
