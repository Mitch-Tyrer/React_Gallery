import React, { Component } from 'react';


export default class SearchForm extends Component {

    state = {
        searchText: ''
    }

    render(){
        return (
            <form className="search-form">
                <label>
                    <input 
                        type="text"
                        name="search"
                        placeholder="Search..."
                    />
                    <button type="submit" id="submit">Search</button>
                </label>
            </form>
        )
    }
}