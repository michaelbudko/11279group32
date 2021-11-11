import React from 'react'
import axios from 'axios'

function Form({ setInputText, inputText, setQuery, setAddress }) {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        setQuery(inputText);
        setInputText("");
        resolveAddress(inputText);
    };
    const resolveAddress = async (inputText) => {
        var longitude = 5;
        var latitude = 5;
        const link = "https://maps.googleapis.com/maps/api/geocode/json?address=" + inputText +
            "&key=AIzaSyDtaCy-P7DUboSkVmNBlolqOyQEmJ7QE_s";
        await axios.get(link).then(res => {
            console.log(res.data.results[0].geometry)
            if (res.data.status === "OK") {
                latitude = res.data.results[0].geometry.location.lat;
                longitude = res.data.results[0].geometry.location.lng;
            }
        })
        setAddress({
            latitude,
            longitude
        })
    }


    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="appInput" placeholder="Search address/ZIP" />
            <button onClick={submitHandler} className="submitButton" type="submit" > Search </button>
        </form>
    )
}

export default Form;
