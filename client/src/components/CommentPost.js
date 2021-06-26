import React, { useEffect, useState } from 'react';

const CommentPost = ({name, closeModal}) => {

    const [ comment, setComment ] = useState('');
    const [ username, setUsername ] = useState('');

    const [data, setData ] = useState('');


   
    const postCommentData = async () => {
            await fetch(`https://oj4m71cxjh.execute-api.us-west-2.amazonaws.com/dev/articles/${name}/comment`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                comments:[
                        {
                            username: username,
                            text: comment    
                        }
                ]
            }),
            header: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setData(data)
            console.log(data);
        })
    }
    const handleSubmit = e => {
        e.preventDefault();

        postCommentData();
        
        setUsername('');
        setComment('');

        closeModal();
        setTimeout(()=> {
            window.location.reload()
        }, 100);
    }

    return(
        <div className="formContainer" onClick={closeModal}>
            <form className="content" onSubmit={handleSubmit} onClick={(e)=>e.stopPropagation()}>
                    <h1 style={{paddingBottom: "20px", textAlign: "center"}}>Add Comment</h1>
                    <div className="bodyStyle">
                        <label>Username: </label>
                        <input
                            style={{width: "60%", maxWidth: "100%"}} 
                            type="text" 
                            value={username} 
                            placeholder="John Doe" 
                            onChange={(e)=>setUsername(e.target.value)} 
                            required
                            
                        />
                        <br/>
                        
                        <label>Text: </label>
                        <br />
                        <textarea 
                            style={{resize: "none", maxWidth: "100%"}} 
                            rows="20" 
                            cols="50" 
                            value={comment} 
                            placeholder="Great Article!" 
                            onChange={(e)=>setComment(e.target.value)} 
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
export default CommentPost;
