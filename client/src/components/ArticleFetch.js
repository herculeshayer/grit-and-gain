import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import GetOneArticle from './GetOneArticle';

const StyleArticle = {
    textAlign: "center",
}


const ArticleFetch = ({name}) => {
    const [ articleData, setArticleData ] = useState([]);
    console.log(name);
    useEffect(()=> {
        fetch('/articles')
            .then((res) => res.json())
            .then((data)=> setArticleData(data))
            .catch(error=>console.log(error))
    },[])
    const mapArticles = articleData.map((article, key)=> {
        return <GetOneArticle key={key} article={article}/>
    })
    
    return (
        <>
            {mapArticles}
        </>
    );

}
export default ArticleFetch;