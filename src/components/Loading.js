import React from 'react';
import '../css/404.css';

const Loading = () => {

    return (
        <div className="container not-found">
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1><span>Loading</span><span>.</span><span>.</span><span>.</span></h1>
                        <h3>Please wait.</h3>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Loading;