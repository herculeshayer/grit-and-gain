import React from 'react';
import { Context } from 'react';

import { ArticleGetOne, ArticleGetAll } from '../components/ArticleFetch';
import ArticleDelete from '../components/ArticleDelete';


const DisplaySingleArticle = ({match}) => {
    const name = match.params.id;
   
    return (
        <article>
            <ArticleGetOne name={name}/>
            <ArticleDelete name={name}/>
        </article>
    );
}
export default DisplaySingleArticle;