import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends Component {

    state = {
        searchText: ''
    }

    handleChange = e => {
        this.setState({ searchText: e.target.value });
      }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value, 'results');
        let path = `/search?q=${this.query.value}`;
        this.props.history.push(path);
        e.currentTarget.reset();
      }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    onChange={this.handleChange}
                    name="search"
                    ref={(input) => this.query = input}
                    placeholder="Search..."
                />
                <button className="search-button" type="submit" id="submit">Search</button>
            </form>
        )
    }
}

export default withRouter(SearchForm);