import React from 'react';
import PropTypes from 'prop-types';

import GrommetTitle from 'grommet/components/Title';

class Title extends React.PureComponent {
  render() {
    return (
      <GrommetTitle>
        {this.props.children}
      </GrommetTitle>
    );
  }
}

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Title.defaultProps = {
  children: [],
};

export default Title;
