import React, { useEffect, useState } from 'react';
import Suggestions from "./Suggestions";

export function Search() {

    const API_KEY = "";
    const API_URL = `http://newsapi.org/v2/everything`;

    let [query, setQuery] = useState('default');
    let [results, setResults] = useState([]);
    let [apiurl, setApiurl] = useState('');
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(false);
    const [dataempty, setDataempty] = useState(false);

    useEffect(() => {
        let fetchData = async () => {
            await fetch(`${API_URL}?q=${query}&pageSize=10&apiKey=${API_KEY}`)
                .then(response => response.json())
                .then(jsonResponse => {
                    if (jsonResponse) {
                        setResults(jsonResponse.articles);
                        setLoading(false);
                        setDataempty(false);
                        setErrorMessage(false);
                    } else {
                        setErrorMessage(true);
                        setLoading(false);
                    }
                    if (jsonResponse.articles.length == 0) {
                        setDataempty(true);
                    } else {
                        setDataempty(false);
                    }
                }).catch((err) => {
                    alert("API is not working! Refresh")
                    setErrorMessage(true);
                })
        }
        fetchData();
        return () => {

        };
    }, [apiurl])

    let handleSubmit = (e) => {
        e.preventDefault();
        setApiurl(`${API_URL}?q=${query}&pageSize=10&apiKey=${API_KEY}`);
    }

    return (
        <div className="search">
            <div className="flexcontainer">
                <div className="searchArea">
                    <div className="searchBoxTop">
                        <div className="seachBox-Container">
                            <h1>Dalglish Fernandes - #15/01</h1>
                            <form onSubmit={handleSubmit}>
                                <input
                                    name="search"
                                    className="form-control"
                                    type="search"
                                    placeholder="Type here........"
                                    onChange={e => setQuery(e.target.value)}
                                    autoCorrect="off"
                                />
                                <button type="submit"><i className="icofont-search-2"></i>Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="search">
                    <div className="searchResults">
                        {loading && !errorMessage ? (<h1 className="loading">loading...</h1>) : errorMessage ? (
                            <div className="nodata"><h1 className=""><span>API broken</span></h1></div>
                        ) : dataempty ? (<div className="nodata"><h1 className=""><span>No Data</span></h1></div>) : <Suggestions results={results} />}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Search;
