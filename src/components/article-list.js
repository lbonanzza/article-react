import React, {Component} from 'react';
import Article from './article'

class ArticleList extends Component {
  state = {
    openArticleId: null
  };

  toggleOpenArticle = (openArticleId) => () => this.setState({openArticleId});

  render() {
    return (
        <ul>
          {this.getArticles()}
        </ul>
    );
  }

  getArticles() {
    return this.props.articles.map(article => (
      <li key={article.id}>
        <Article article={article}
                 onBtnClick={this.toggleOpenArticle(article.id)}
                 isOpen={article.id === this.state.openArticleId}
        />
      </li>
    ))
  }
}

export default ArticleList;