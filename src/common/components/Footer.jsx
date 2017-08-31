import React from 'react';
import PropTypes from 'prop-types';

import GrommetFooter from 'grommet/components/Footer';

class Footer extends React.PureComponent {
  render() {
    return (
      <GrommetFooter>
        {this.props.children}
      </GrommetFooter>
    );
  }
}

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Footer.defaultProps = {
  children: [],
};

export default Footer;
