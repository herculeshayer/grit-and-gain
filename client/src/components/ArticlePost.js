import React, {useState} from 'react';

// const formContainer = {
//     position: "fixed",
//     top: "0",
//     left: "0",
//     right: "0",
//     bottom: "0",
//     backgroundColor: "rgba(0,0,0,0.5)",
//     display: "flex",
//     alignItems: "center",
//     justifyContext: "center",
    
//     // opacity:"0",
//     // transition: "all 0.3s ease-in-out"
// }

// const content = { 
//     width: "40%",
//     backgroundColor: "white",
//     margin: "0 auto",
//     borderRadius: "25px"
// }

// const body = {
//     textAlign: "center"
// }

// const footer = {
//     textAlign: "center",
//     padding: "20px",
// }

const ArticlePost = ({closeModal}) => {
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ articleInfo, setArticleInfo ] = useState('');
    
    const addArticle = async() => {
            await fetch('https://oj4m71cxjh.execute-api.us-west-2.amazonaws.com/dev/articles', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                title: title, 
                author: author, 
                articleInfo: articleInfo
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }
    
    
    const handleSubmit = e => {
        e.preventDefault();

        addArticle();

        setTitle('');
        setAuthor('');
        setArticleInfo('');
        closeModal();

        //refresh page after 100ms upon form submit
        setTimeout(()=> {
            window.location.reload()
        }, 1000);
        
    }
    
    return (
        <div className="formContainer" onClick={closeModal}>
            <form className="content" onSubmit={handleSubmit} onClick={(e)=>e.stopPropagation()}>
                    <h1 style={{paddingBottom: "20px", textAlign: "center"}}>Create Article</h1>
                    <div className="bodyStyle">
                        <label>Title: </label>
                        <input
                            style={{width: "60%", maxWidth: "100%"}} 
                            type="text" 
                            value={title} 
                            placeholder="How to Squat with Correct Form" 
                            onChange={(e)=>setTitle(e.target.value)} 
                            required
                            
                        />
                        <br/>
                        <label>Author: </label>
                        <input 
                            style={{width: "60%", maxWidth: "100%"}} 
                            type="name" 
                            value={author} 
                            placeholder="John Doe" 
                            onChange={(e)=>setAuthor(e.target.value)} 
                            required
                        />
                        <br />
                        <label>Article Info: </label>
                        <br />
                        <textarea 
                            style={{resize: "none", maxWidth: "100%"}} 
                            rows="20" 
                            cols="50" 
                            value={articleInfo} 
                            placeholder="Keep correct form" 
                            onChange={(e)=>setArticleInfo(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="footerStyle">
                        <button 
                            type="submit" 
                            style={{width: "4rem", height: "2rem"}}>
                                Submit</button>
                        <button 
                            type="reset" 
                            style={{width: "4rem", height: "2rem"}} 
                            onClick={closeModal}>
                                Cancel</button>
                    </div>
            </form>
        </div>
    );
}
export default ArticlePost;