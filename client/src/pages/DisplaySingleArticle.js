import React, { useState } from 'react';
// import { Context } from 'react';

import { ArticleGetOne } from '../components/ArticleGet';
import ArticleDelete from '../components/ArticleDelete';
import ArticlePatch from '../components/ArticlePatch';





const DisplaySingleArticle = ({match}) => {
    const [ showModal, setShowModal ] = useState(false);
    const [showCommentModal, setCommentModal ] = useState(false);
    const name = match.params.id;
   
    return (
        <article>
            <div>
                <button style={{marginBottom: "15px"}} onClick={()=>setShowModal(true)}>Edit Article</button>
                {showModal && <ArticlePatch name={name} closeModal={()=>setShowModal(false)}/>}
                <ArticleDelete name={name} />
            </div>
            
            <ArticleGetOne name={name} />
            

            
            
            
        </article>
    );
}
export default DisplaySingleArticle;