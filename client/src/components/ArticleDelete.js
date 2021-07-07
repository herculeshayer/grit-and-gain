import React, { useEffect, useState } from 'react';

/*
    This function will attempt to send a DELETE request to a 
    specific endpoint on an API
    id endpoint parameter is passed to ArticleDelete as {name}
*/

const ArticleDelete = ({name}) => {
    const [ status, setStatus ] = useState('');
    const deleteArticle = async () => {
        fetch(`https://oj4m71cxjh.execute-api.us-west-2.amazonaws.com/dev/articles/${name}`, {
            method: "DELETE"
        })
        .then(() => setStatus('Article Successfully Deleted'));
    }
    //Submit event handler
    const handleSubmit = () => {
        
        deleteArticle();
        
        console.log(status);
        window.alert("This article has been deleted -- you'll now be redirected to the article list page");
        (()=>window.location.href= "/Articles-List")();
    }
    
    return(
        <div>
            <button style={{marginBottom: "15px"}} onClick={()=>handleSubmit()}>Delete Article</button>
        </div>
    );
}
export default ArticleDelete;