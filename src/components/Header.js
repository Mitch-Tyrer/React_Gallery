import React from 'react';
import Nav from './Nav';
import SearchForm from './SearchForm';

const Header = (props) => {
    return (
        <header>
            <h1>My React Gallery</h1>
            <SearchForm />
            <h4>Popular Searches</h4>
            <Nav />
        </header>

    );
}

export default Header;