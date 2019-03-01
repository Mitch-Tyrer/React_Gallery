import React from 'react';
import Nav from './Nav';
import SearchForm from './SearchForm';

const Header = (props) => {
    console.log(props.search)

    return (
        <header>
            <h1>My React Gallery</h1>
            <SearchForm onSearch={props.search}/>
            <h4>Popular Searches</h4>
            <Nav />
        </header>

    );
}

export default Header;