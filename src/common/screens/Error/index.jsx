import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../components/Section';
import Headline from '../../components/Headline';

class Error extends React.Component {
  render() {
    return (
      <Section>
        <Headline>
          Oops! We cannot find {this.props.location.pathname}
        </Headline>
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
