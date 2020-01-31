import React from 'react';
import Article from './article'
import useAccordion from '../custom-hooks/accordion'

export default function ArticleList({articles}) {

  const { openArticleId, toggleOpenArticle } = useAccordion();

  const articleItems = articles.map(article => (
    <li key={article.id}>
      <Article article={article}
               onBtnClick={toggleOpenArticle(article.id)}
               isOpen={article.id === openArticleId}
      />
    </li>
  ));
  return <ul>{articleItems}</ul>;
}


// import accordion from "../decorators/accordion";

// function ArticleList({ articles, toggleOpenArticle, openArticleId }) {
//
//     const articleItems = articles.map(article => (
//       <li key={article.id}>
//         <Article article={article}
//                  onBtnClick={toggleOpenArticle(article.id)}
//                  isOpen={article.id === openArticleId}
//         />
//       </li>
//     ));
//   return articleItems;
// }
//
// //export default accordion(ArticleList);
