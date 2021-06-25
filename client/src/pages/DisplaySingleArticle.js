import React, { useState } from 'react';
import { Context } from 'react';

import { ArticleGetOne, ArticleGetAll } from '../components/ArticleFetch';
import ArticleDelete from '../components/ArticleDelete';
import ArticlePatch from '../components/ArticlePatch';


const DisplaySingleArticle = ({match}) => {
    const [ showModal, setShowModal ] = useState(false);
    const name = match.params.id;
   
    return (
        <article>
            <ArticleDelete name={name} />
            <button onClick={()=>setShowModal(true)}>Edit Article</button>
            {showModal && <ArticlePatch name={name} closeModal={()=>setShowModal(false)}/>}
            <ArticleGetOne name={name} />
            
        </article>
    );
}
export default DisplaySingleArticle;