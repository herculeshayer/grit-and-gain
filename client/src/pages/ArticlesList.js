import React, {useState} from 'react';

import { ArticleGetAll } from '../components/ArticleGet';
import ArticlePost from '../components/ArticlePost';

const ArticleTitle = {
    margin: "0px auto 0px auto",
    textAlign: "center",
    display: "block"
}
const ArticleContainer = {
    backgroundColor: "white",
    margin: "0px auto 0px auto",
    width: "30%",
    borderRadius: "15%",
    border: "solid black 3px"

}

const ArticlesList = () => {
    const [showModal, setShowModal] = useState(false);

  
    return (
        <>
            <section style={ArticleTitle}>
                <h3>This is the articles page</h3>
                <p>Below are a few articles which you can view</p>
                <button style={{marginBottom: "18vh", marginTop: "3vh"}} onClick={()=> setShowModal(true)}>Create Article</button>
            </section>
            <div style={ArticleContainer}>
                {showModal && <ArticlePost closeModal={()=>setShowModal(false)}/>}
                <ArticleGetAll />
            </div>
        </>
        
    );
}
export default ArticlesList;