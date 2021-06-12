import React from 'react';

import { ArticleGetAll } from '../components/ArticleFetch';

const ArticlesList = () => {

    return (
        <>
            <h3>This is the articles page</h3>
            <p style={{marginBottom: "100px"}}>Below are a few articles which you can view</p>
            
            <ArticleGetAll />
        </>
        
    );
}
export default ArticlesList;