import React from 'react';
 
export default class SearchBar extends React.Component {
 
    constructor() {
        super();
        this.state = {
          searchTerm: ''
        };
    }
 
    handleInputChange(event) {
        this.setState({
            searchTerm: event.target.value
        });
    }
 
    handleSubmit(event) {
        event.preventDefault();
        let searchTerm = this.state.searchTerm.trim(); // Remove whitespace at the beginning and end.
        
        if (!searchTerm) { // If no search term was typed, return early and do nothing.
            return;
        }
        
        this.props.onSearch(searchTerm); // Execute callback
        this.setState({ searchTerm: '' });
    }
 
    render() {
        return (
            <div className="search-bar" >
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input className="search-bar-text" type="text" placeholder="Type Keyword Here" onChange={this.handleInputChange.bind(this)} value={this.state.searchTerm}/>
                </form>
            </div>
        );
    }
}
