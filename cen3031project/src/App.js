import React from 'react';

function App()
{
    return(
        <div className="App">
            <form className="search-form">
                <input className="search-bar" type="text" placeholder="Search address/ZIP"/>
                <button className="search-button" type="submit">Search</button>
            </form>
        </div>
    );
}

export default App;
