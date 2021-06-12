import React from 'react';
import { Context } from 'react';

import { ArticleGetOne, ArticleGetAll } from '../components/ArticleFetch';


const DisplaySingleArticle = ({match}) => {
    const name = match.params.id;
   
    return (
        <article>
            
            <h1>Article {name}</h1>
            <ArticleGetOne name={name}/>
            
        </article>
    );
}
export default DisplaySingleArticle;