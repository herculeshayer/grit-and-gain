import React from 'react';

import GetOneArticle from '../components/GetOneArticle';
import ArticleFetch from '../components/ArticleFetch';


const DisplayArticle = ({match}) => {
    const name = match.params.id;
    // const filterArticle = articleData.filter(article=>article._id == name);
   
    return (
        <article>
            <ArticleFetch name={name} />
            <GetOneArticle />
            <h1>Article {name}</h1>
            
        </article>
    );
}
export default DisplayArticle;