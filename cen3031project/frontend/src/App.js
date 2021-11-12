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
                <h1> EnergIO </h1>
				
				<img src="logo.png" alt="App Logo"/> 
            </header>
			<p> 
				Enter an address/ZIP code below to get<br/>
				solar information and cost savings at the address below!
			</p>
            <Form setInputText={setInputText} inputText={inputText} setQuery={setQuery} setAddress={setAddress} />
            <Info key={query} address={query} id="Info"/>
            <GoogleMap
                address={address} 
				id="Map"/>
                
        </div>
        
    );
}

export default App;
