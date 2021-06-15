import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// import ArticlesList from '../pages/ArticlesList';

const StyleArticle = {
    textAlign: "center",
}


const ArticleGetAll = () => {
    const [ articleData, setArticleData ] = useState([]);
    
    useEffect(()=> {
        fetch('http://localhost:8000/articles')
            .then((res) => res.json())
            .then((data)=> {
                setArticleData(data)
                console.log(data)
            })
            .catch(error=>console.log(error))
    },[])
    
    const mapData = articleData.map((article, key) => {
        const {_id, title} = article;
        return (
            <div key={key}>
                <Link /*onClick={()=>setArticleData(articleData.filter(article => article._id === name))}*/ to={`/article/${_id}`}><h2>{title}</h2></Link>
                <br />
            </div>
        );
    })
    
    return (
        <div style={StyleArticle}> 
            <h1>Articles</h1>
            {mapData}
        </div>
    );

}
const ArticleGetOne = ({name}) => {
    const [ articleData, setArticleData ] = useState([]);
    
    useEffect(()=> {
        fetch('http://localhost:8000/articles')
            .then((res) => res.json())
            .then((data)=> {
                setArticleData(data.filter(article => article._id === name))
                console.log(data)
            })
            .catch(error=>console.log(error))
    },[])
    

    const mapArticleData = articleData.map((article, key) => {
        const {title, data, author, comments, upvotes} = article;
        return(
            <div key={key} style={StyleArticle}>
                <h1>{title}</h1>
                <h4>{author}</h4>
                <h6>{upvotes}</h6>
                <p>{comments.map((comment, key) => {
                    const { username, text } = comment;
                    return (
                        <div key={key}>
                            <h1>{username}</h1>
                            <p>{text}</p>
                        </div>
                    );
                })}</p>
                <p>{data}</p>


            </div>
        );
    })
    return (
        <>
            <h1>ArticleGetOne{name}</h1>
            {mapArticleData}
        </>
    )
}

export {
    ArticleGetAll,
    ArticleGetOne
}