import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// import ArticlesList from '../pages/ArticlesList';
import { UpvoteComment } from './CommentPost';

const StyleArticle = {
    textAlign: "center",
}


const ArticleGetAll = () => {
    const [ articleData, setArticleData ] = useState([]);
    
    useEffect(()=> {
        fetch('https://oj4m71cxjh.execute-api.us-west-2.amazonaws.com/dev/articles')
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
                <Link style={{display: "inline-block", padding:"5px"}} to={`/article/${_id}`}><h2>{title}</h2></Link>
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
            fetch('https://oj4m71cxjh.execute-api.us-west-2.amazonaws.com/dev/articles')
            .then((res) => res.json())
            .then((data)=> {
                setArticleData(data.filter(article => article._id === name))
                // console.log(data)
            })
            .catch(error=>console.log(error))
    },[])
    

    const mapArticleData = articleData.map((article, key) => {
        const {title, articleInfo, author, comments, upvotes} = article;
        return(
            <div key={key} style={{StyleArticle}}>
                <h1>Article: {title}</h1>
                <h3>Created By: {author}</h3>
                <p style={{paddingBottom: "50px"}}><h5>Article Information: </h5>{articleInfo}</p>
                <h6>Upvotes: {upvotes}</h6>
                <>Comments: {comments.map((comment, key) => {
                    const { username, text, upvote } = comment;
                    return (
                        <div key={key}>
                            <h1>Username: {username}</h1>
                            <p>Text: {text}</p>
                            {/* <p>Upvote: {upvote}</p> */}
                            {/* <UpvoteComment upvote={upvote} name={name}/> */}
                            {/* <button onClick={()=>upvote+1}>Upvote</button> */}
                        </div>
                    );
                })}</>
                


            </div>
        );
    })
    return (
        <>  
            {mapArticleData}
        </>
    )
}

export {
    ArticleGetAll,
    ArticleGetOne
}