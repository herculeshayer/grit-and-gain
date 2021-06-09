import React from 'react';

const DisplayArticle = ({match}) => {
    const name = match.params.id;
    return (
        <h1>Single Article {name}</h1>
    );
}
export default DisplayArticle;