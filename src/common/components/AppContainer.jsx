import React from 'react';

import GrommetApp from 'grommet/components/App';

import 'grommet/scss/vanilla/index.scss';

class AppContainer extends React.PureComponent {
  render() {
    return <GrommetApp {...this.props} />;
  }
}

AppContainer.defaultProps = {
  centered: false,
};

export default AppContainer;
