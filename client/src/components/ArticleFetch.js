import React, { useEffect, useState } from 'react';

const StyleArticle = {
    textAlign: "center",
}
const PaddingH1 = {
    paddingBottom: "50px",
}


const ArticleFetch = () => {
    const [ articleData, setArticleData ] = useState([]);

    useEffect(()=> {
        fetch('/articles')
            .then((res) => res.json())
            .then((data)=> setArticleData(data))
            .catch(error=>console.log(error))
        console.log(articleData);
    },[])
    const mapArticles = articleData.map((article, key)=> {
        const { title, author, data } = article;
        return(
            <article key={key}>
                <h1>{title}</h1>
                
                <br />
            </article>
        );
    }) 
    return(
        <div style={StyleArticle}>
            <h1 style={PaddingH1}>Articles Page</h1>
            {mapArticles}
        </div>
    );
}
export default ArticleFetch;