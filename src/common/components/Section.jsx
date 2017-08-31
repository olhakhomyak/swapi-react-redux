import React from 'react';
import PropTypes from 'prop-types';

import GrommetSection from 'grommet/components/Section';

class Section extends React.PureComponent {
  render() {
    return (
      <GrommetSection>
        {this.props.children}
      </GrommetSection>
    );
  }
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Section.defaultProps = {
  children: [],
};

export default Section;
