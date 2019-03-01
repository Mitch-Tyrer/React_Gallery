import React, { Component } from 'react';


export default class SearchForm extends Component {

    state = {
        searchText: ''
    }

    handleChange = (e) => {
        this.setState({ searchText: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
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