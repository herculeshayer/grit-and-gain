import React, {useState} from 'react';

import { ArticleGetAll } from '../components/ArticleFetch';
import ArticlePost from '../components/ArticlePost';

const ArticlesList = () => {
    const [showModal, setShowModal] = useState(false);

  
    return (
        <>
            <h3>This is the articles page</h3>
            <p style={{marginBottom: "100px"}}>Below are a few articles which you can view</p>
            <div>
                <button onClick={()=> setShowModal(true)}>Create Article</button>
                {showModal && <ArticlePost closeModal={()=>setShowModal(false)}/>}
            </div>
            <ArticleGetAll />
        </>
        
    );
}
export default ArticlesList;