import React, {useState,useEffect} from 'react'; 


const App=() =>
{
    const[search, setSearch]=useState("");
    const[query,setQuery]=useState('');

    const updateSearch = e =>{
        setSearch(e.target.value);
        console.log(search);
    }
    const getSearch = e =>{
        e.preventDefault();
        setQuery(search);
    }
    useEffect(()=>{ 
        console.log("effect has been run")
    }, [query]);
    return(
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" placeholder="Search address/ZIP" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit">Search</button>
            </form>
        </div>
    );
}

export default App;
