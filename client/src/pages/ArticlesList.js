import React, {useState} from 'react';

import { ArticleGetAll } from '../components/ArticleFetch';
import ArticlePost from '../components/ArticlePost';

const ArticlesList = () => {
    const [showModal, setShowModal] = useState(false);

  
    return (
        <>
            <h3>This is the articles page</h3>
            <p>Below are a few articles which you can view</p>
            <div>
                <button style={{marginBottom: "18vh"}} onClick={()=> setShowModal(true)}>Create Article</button>
                {showModal && <ArticlePost closeModal={()=>setShowModal(false)}/>}
            </div>
            <ArticleGetAll />
        </>
        
    );
}
export default ArticlesList;