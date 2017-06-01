import React from 'react';
import Header from './header';
import SearchBar from './SearchBar';
import WikiList from './WikiList';
 
import superagent from 'superagent';
import jsonp from 'superagent-jsonp';
 
export default class WikiViewer extends React.Component {
 
    constructor() {
        super();
        this.state = { 
            results: [
                '', [], [], []
            ]
        };
    }
 
    handleSearch(searchTerm) {
        superagent.get('https://en.wikipedia.org/w/api.php')
            .query({
                search: searchTerm,
                action: 'opensearch',
                format: 'json'
            })
            .use(jsonp)
            .end((error, response) => {
               if (error) {
                   console.error(error);
               } else {
                   this.setState({ results: response.body });
               }
            });
    }
 
    render() {
        return(
            <div className="wrapper">
                <Header />
                <SearchBar onSearch={this.handleSearch.bind(this)}/>
                <WikiList results={this.state.results}/>
            </div>
        );
    }
}