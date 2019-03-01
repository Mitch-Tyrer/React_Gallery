import React, { Component } from 'react';


export default class SearchForm extends Component {

    state = {
        searchText: ''
    }

    render() {
        return (
            <form className="search-form">
                <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                />
                <button className="search-button" type="submit" id="submit">Search</button>
            </form>
        )
    }
}