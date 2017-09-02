import React from 'react';

import GrommetArticle from 'grommet/components/Article';

class Article extends React.Component {
  render() {
    return <GrommetArticle {...this.props} />;
  }
}

export default Article;
