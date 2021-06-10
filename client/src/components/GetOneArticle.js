import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import DisplayArticle from '../pages/DisplayArticle';

const GetOneArticle = ({_id, title}) => {
    const [singleArticle, setSingleArticle] = useState([]);
    
    return(
        <div>
            <Link to={`/article/${_id}`}><h1>{title}</h1></Link>
            <br/>
        </div>
    );
}
export default GetOneArticle;