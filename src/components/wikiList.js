import React from 'react';
import wikiListItem from './wikiListItem';

const WikiList = (props) => {
    const wikiListItems = props.keywords.map((keyword) => {
        return <WikiListItem key={keyword.name} keyword={keyword} /> 
    });
    
    return (
    <ul className="col-md-4 list-group">
     {wikiItems}
    </ul>
    );
}