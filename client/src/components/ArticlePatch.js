import React, { useState } from 'react';

const ArticlePatch = ({name}) => {
    const [ status, setStatus ] = useState('');

    const patchArticle = async () => {
        fetch(`https://oj4m71cxjh.execute-api.us-west-2.amazonaws.com/dev/articles/${name}`, {
            method: 'PATCH'
        })
        .then(()=>setStatus("Article Successfully Patched"))
    }
    const handleSubmit = () => {
        useEffect(()=> {
            patchArticle();
        }, [])
    }

    return (
        <button onClick={()=>handleSubmit()}></button>
    );
}
export default ArticlePatch;