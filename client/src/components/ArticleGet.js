import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// import ArticlesList from '../pages/ArticlesList';
import { UpvoteComment } from './CommentPost';

import { CommentPost } from '../components/CommentPost';
const StyleArticle = {
    textAlign: "center",
}

/**
 * 
 * @returns All ArticleData found at RESTful API endpoint
 * The data received is then mapped & displayed using JSX 
 */

const ArticleGetAll = () => {
    const [ articleData, setArticleData ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    
    useEffect(()=> {
        fetch('https://oj4m71cxjh.execute-api.us-west-2.amazonaws.com/dev/articles')
            .then((res) => res.json())
            .then((data)=> {
                setLoading(true)
                setArticleData(data)
                console.log(data)
            })
            .catch(error=>console.log(error))
    },[])

    if(loading==false) {
        return (
            <h1>
                Articles are loading..
            </h1>
        );
    }
    
    const mapData = articleData.map((article, key) => {
        const {_id, title, author} = article;
        return (
            <div key={key} style={{margin: "10px auto 10px auto"}} className="ArticleList">
                <Link style={{display: "inline-block", padding:"5px"}} to={`/article/${_id}`}><h2>{title}</h2></Link>
                <p style={{fontSize: "18px", display: "inline-block"}}>{`by ${author}`}</p>
            </div>
        );
    })
    
    return (
        <div style={StyleArticle}> 
            <h1>Articles</h1>
            {loading&&mapData}
        </div>
    );

}


const ArticleTitleAuthor = {
    marginRight: "0px auto 0px auto",
    
}
const ArticleInfoStyling = {
    margin: "20px auto 0px auto",
    width: "50%",
    backgroundColor: "white",
    border: "solid black 3px",
    borderRadius: "0%",
    maxWidth: "600px"
}
const CommentStyling = {
    margin: "0px auto 10px auto",
   
    width: "25%",
    backgroundColor: "white",
    border: "solid black 3px",

}
const Comment = {
    marginTop: "30px",
    // marginLeft: "30vw",
    display: "inline-block",
}

/**
 * 
 * @param {string} name - article endpoint id 
 * @returns A single article corresponding to the parameter value passed
 */

const ArticleGetOne = ({name}) => {
    const [ articleData, setArticleData ] = useState([]);
    
    const [showCommentModal, setCommentModal ] = useState(false);
    
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
            <div key={key}>
                <section style={ArticleTitleAuthor}>
                    <h2>Title: {title}</h2>
                    <h3>By: {author}</h3>
                    <h6>Upvotes: {upvotes}</h6>
                    <div style={ArticleInfoStyling}>
                        <p style={{paddingBottom: "40px", paddingTop: "20px"}} id="paragraph-margin"><h5>Article Information: </h5>{articleInfo}</p>
                    </div>
                </section>

                <section >

                    <div style={Comment}>
                        <button onClick={()=>setCommentModal(true)}>Add Comment</button>
                        {showCommentModal && <CommentPost name={name} closeModal={()=>setCommentModal(false)}/>}
                    </div>

                    <div style={{marginTop: "20px"}}>
                        <h1 style={{marginRight: "auto", marginLeft: "auto", textAlign: "center", marginBottom: "20px"}}>Comments:</h1> {comments.map((comment, key) => {
                        const { username, text, upvote } = comment;
                        return (
                            <div key={key} style={CommentStyling}>
                                <p className="comment-alteration"><b>{username}</b>: {text}</p>
                                {/* <p><b>Comment:</b> {text}</p> */}
                                {/* <p>Upvote: {upvote}</p> */}
                                {/* <UpvoteComment upvote={upvote} name={name}/> */}
                                {/* <button onClick={()=>upvote+1}>Upvote</button> */}
                            </div>
                        );
                        })}
                    </div>
                </section>
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