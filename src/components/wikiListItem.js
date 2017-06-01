import React from 'react';
 
export default class WikiListItem extends React.Component {
    render() {
        return (
            <div className="wiki-list-item">
            <a href={this.props.url} target="_blank">
                <div>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                </div>
            </a>
        </div>
        )
    }
}