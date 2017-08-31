import React from 'react';
import PropTypes from 'prop-types';

import GrommetArticle from 'grommet/components/Article';

class Article extends React.PureComponent {
  render() {
    return (
      <GrommetArticle>
        {this.props.children}
      </GrommetArticle>
    );
  }
}

Article.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Article.defaultProps = {
  children: [],
};

export default Article;
