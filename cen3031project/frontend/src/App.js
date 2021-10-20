import React, {useState,useEffect} from 'react'; 
import Form from "./Components/Form";

const App=() =>
{
    const[inputText,setInputText]=useState("");
    const[query,setQuery]=useState("");
    return(
        <div className="App">
            <header> 
                <h1> EnergIO {query} </h1>
            </header>
            <Form setInputText={setInputText} inputText={inputText} setQuery={setQuery} />
        </div>
    );
}

export default App;
