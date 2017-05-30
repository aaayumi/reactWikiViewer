import React, { Component } from 'react';


const WikiListItem = ({keyword}) => {
    return (
    <li className="list-group-item">
    <div className="title">
    {keyword.title}
    </div>
    </li>
    );
};

export default WikiListItem;