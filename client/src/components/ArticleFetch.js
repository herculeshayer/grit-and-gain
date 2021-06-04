import React, { useEffect, useState } from 'react';

const ArticleFetch = () => {
    const [ articleData, setArticleData ] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:8000/articles')
        .then((res) => res.json())
        .then((data)=> setArticleData(data));
    },[])
    console.log(articleData);
    const mapArticles = articleData.map(()=> {

    }) 
    return(
        <></>
    );
}
export default ArticleFetch;