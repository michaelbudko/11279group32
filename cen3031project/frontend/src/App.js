import React, { useState, useEffect } from 'react';
import Form from "./Components/Form";
import Info from "./Components/Info";
import GoogleMap from "./Components/GoogleMap";

const App = () => {
    const [inputText, setInputText] = useState("");
    const [query, setQuery] = useState("");
    const [address, setAddress] = useState({
        longitude: -82.3549,
        latitude: 29.6436
    })
    return (
        <div className="App">
            <header>
                <h1> EnergIO  </h1>
            </header>
            <Form setInputText={setInputText} inputText={inputText} setQuery={setQuery} setAddress={setAddress} />
            <h2> {query} </h2>
            <Info key={query} address={query} />
            <GoogleMap
                address={address} />
        </div>
    );
}

export default App;
