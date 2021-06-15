import React, {useState} from 'react';

const formContainer = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContext: "center",
    // opacity:"0",
    // transition: "all 0.3s ease-in-out"
}

const content = { 
    width: "40%",
    backgroundColor: "white",
    margin: "0 auto"
}

const body = {
    textAlign: "center"
}

const footer = {
    textAlign: "center",
    padding: "20px"
}

const ArticlePost = ({closeModal}) => {
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ data, setData ] = useState('');
    
    const addArticle = async() => {
            fetch('http://localhost:8000/articles/', {
            method: 'POST',
            body: JSON.stringify({title, author, data}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        addArticle();

        setTitle('');
        setAuthor('');
        setData('');
        closeModal();
        (()=>window.location.reload())()
    }

    return (
        <div style={formContainer} onClick={closeModal}>
            <form style={content} onSubmit={handleSubmit} onClick={(e)=>e.stopPropagation()}>
                <h1 style={{paddingBottom: "20px", textAlign: "center"}}>Create Article</h1>
                <div style={body}>
                    <label>Title: </label>
                    <input type="text" value={title} placeholder="How to Squat with Correct Form" onChange={(e)=>setTitle(e.target.value)} required/>
                    <label>Author: </label>
                    <input type="name" value={author} placeholder="John Doe" onChange={(e)=>setAuthor(e.target.value)} required/>
                    <label>Data: </label>
                    <textarea rows="5" cols="80" value={data} placeholder="Keep correct form" onChange={(e)=>setData(e.target.value)} required/>
                </div>
                <div style={footer}>
                    <button type="submit" >Submit</button>
                    <button type="reset" onClick={closeModal}>Cancel</button>
                </div>
            </form>
        
        </div>
    );
}
export default ArticlePost;