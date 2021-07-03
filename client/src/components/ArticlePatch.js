import React, { useEffect, useState } from 'react';


/**
 * Edit an existing article, 
 * @param {string} param0 - article endpoint id, used to locate article from API
 * @param {function()} param0 - function closes modal once invoked
 * @returns - edited article: title, author, articleInfo
 */
const ArticlePatch = ({name, closeModal}) => {
    
    
    const [ data, setData] = useState([]);
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ articleInfo, setArticleInfo ] = useState('');

    const fetchCurrentArticle = async () => {
        await fetch(`https://oj4m71cxjh.execute-api.us-west-2.amazonaws.com/dev/articles/${name}`)
        .then(res=> res.json())
        .then(data=> {
            setData(data)
            console.log(data);
            setTitle(data.title)
            setAuthor(data.author)
            setArticleInfo(data.articleInfo)
        })
        .catch(error=>console.log(error))
    }
    useEffect(()=> {
        fetchCurrentArticle();
    }, [])

    const patchArticle = async () => {
        await fetch(`https://oj4m71cxjh.execute-api.us-west-2.amazonaws.com/dev/articles/${name}`, {
        method: 'PATCH',
        body: JSON.stringify({
            title: title, 
            author: author, 
            articleInfo: articleInfo
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        
        .catch(e=>console.log(e))
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        patchArticle();

        setTitle('');
        setAuthor('');
        setArticleInfo('');

        closeModal();
        setTimeout(()=> {
            window.location.reload()
        }, 100);
    }

    return (
        <div className="formContainer" onClick={closeModal}>
            <form className="content" onSubmit={handleSubmit} onClick={(e)=>e.stopPropagation()}>
                <h1 style={{paddingBottom: "20px", textAlign: "center"}}>Edit Article</h1>
                <div className="bodyStyle">
                        <label>Title: </label>
                        <input
                            style={{width: "60%", maxWidth: "100%"}} 
                            type="text" 
                            id="title"
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
export default ArticlePatch;