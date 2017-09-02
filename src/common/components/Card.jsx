import React from 'react';

import GrommetCard from 'grommet/components/Card';

class Card extends React.Component {
  render() {
    return <GrommetCard {...this.props} />;
  }
}

export default Card;
