import React from 'react';
import Nav from './Nav';

const Header = (props) => {

    return (
        <header>
            <h1>My React Gallery</h1>
            <h4>Popular Searches</h4>
            <Nav />
        </header>

    );
}

export default Header;