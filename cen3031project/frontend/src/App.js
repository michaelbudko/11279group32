import React, {useState,useEffect} from 'react'; 
import Form from "./Components/Form";
import Info from "./Components/Info";

const App=() =>
{
    const[inputText,setInputText]=useState("");
    const[query,setQuery]=useState("");
    return(
        <div className="App">
            <header> 
                <h1> EnergIO  </h1>
            </header>
            <Form setInputText={setInputText} inputText={inputText} setQuery={setQuery} />
			<h2> {query} </h2>
			<Info key = {query} address={query} /> 
        </div> 
    );
}

export default App;
