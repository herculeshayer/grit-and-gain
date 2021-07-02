import React, { useEffect, useState } from 'react';

const CommentPost = ({name, closeModal}) => {

    const [ text, setText ] = useState('');
    const [ username, setUsername ] = useState('');

    // const [ comments , setComments ] = useState({
    //     usernameValue: '',
    //     textValue: ''
    // })

    const [data, setData ] = useState('');

   
    const postCommentData = async () => {
            await fetch(`https://oj4m71cxjh.execute-api.us-west-2.amazonaws.com/dev/articles/${name}/comment`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                    comments: [{
                        username: username,
                        text: text
                    }]
            }),
            headers: {
                'Content-Type' : 'application/json',
            }
        })
        .then(res=>console.log(res))
        .catch(e=>console.log(e))
        
    }
    const handleSubmit = e => {
        e.preventDefault();

        postCommentData();
        
        setUsername('');
        setText('');

        // setComments({
        //     usernameValue: '',
        //     textValue: ''
        // })

        closeModal();
        setTimeout(()=> {
            window.location.reload()
        }, 1000);
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
                            rows={10} 
                            cols={50} 
                            value={text} 
                            placeholder="Great Article!" 
                            onChange={(e)=>setText(e.target.value)} 
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

const UpvoteComment = ({name, upvote}) => {

    const [ count, setCount ] = useState(upvote);

    const PostCommentUpvote = async () => {
        try {
                await fetch(`https://oj4m71cxjh.execute-api.us-west-2.amazonaws.com/dev/articles/${name}/comment`, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                    comments:[{
                        upvote: count
                    }]
                }),
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
            // const data = await response.json();
            // setCount(data);

        } catch (error) {
            console.log(error);
        }
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        setCount(()=>upvote+1)
        
        PostCommentUpvote();
    }

    return (
        <><button onClick={handleSubmit}>Upvote</button></>
    );
}

export  {
    CommentPost,
    UpvoteComment
}
