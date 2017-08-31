import React from 'react';
import PropTypes from 'prop-types';

import GrommetApp from 'grommet/components/App';

import 'grommet/scss/vanilla/index.scss';

class AppContainer extends React.PureComponent {
  render() {
    return (
      <GrommetApp centered={false}>
        {this.props.children}
      </GrommetApp>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

AppContainer.defaultProps = {
  children: [],
};

export default AppContainer;
