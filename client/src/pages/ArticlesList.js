import React, {useState} from 'react';

import { ArticleGetAll } from '../components/ArticleGet';
import ArticlePost from '../components/ArticlePost';


const ArticleContainer = {
    backgroundColor: "white",
    margin: "0px auto 0px auto",
    width: "50%",
    maxWidth: "500px",
    borderRadius: "15%",
    border: "solid black 3px"

}

const ArticlesList = () => {
    const [showModal, setShowModal] = useState(false);

  
    return (
        <>
            <h1>Articles page</h1>
            <section>
                <p>On this page, you'll be able to create an article, edit/delete the article, and comment on it.</p>
                <p>All articles created are presented below.</p>
                <button style={{marginBottom: "18vh", marginTop: "3vh"}} onClick={()=> setShowModal(true)}>Create Article</button>
            </section>
            <div style={ArticleContainer} className="ArticleList">
                {showModal && <ArticlePost closeModal={()=>setShowModal(false)}/>}
                <ArticleGetAll />
            </div>
        </>
        
    );
}
export default ArticlesList;