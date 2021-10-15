import React from 'react'

function Form({setInputText,inputText,setQuery}) {
    const inputTextHandler=(e)=>{
        console.log(e.target.value);
        setInputText(e.target.value);
        setQuery(e.target.value);
    };
    const submitHandler = (e) =>{
        e.preventDefault();
        setInputText("");
    };
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler}type="text" className="appInput" placeholder="Search address/ZIP"/>
            <button onClick={submitHandler} className="submitButton" type="submit" > Search </button>
        </form>
    )
}

export default Form;
