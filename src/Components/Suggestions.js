import React, { useState } from "react";

const Search = (props) => {
    console.log(props.results, "props for suggestions");
    let { results } = props;
    let options = [];

    let getDate = (date) => {
        let dateString = new Date(date).toUTCString();
        return dateString = dateString.split(' ').slice(0, 4).join(' ');
    }

    if(props.results === undefined) {
        options = (<h1>No Data</h1>)
    }else {
    options = results.map((r, index) => (
        <div key={index} className="searchResults-item">
            <div className="card">
                <div className="img-cover">
                    <img alt="Data" src={r.urlToImage}></img>
                </div>
                <div className="searchResults-desc">
                    <h1>{r.title}</h1>
                    <h3>{r.author} <span>{getDate(r.publishedAt)}</span></h3>
                    <h4>{r.description}</h4>
                </div>
                <div className="button_cont" align="center">
                    <a
                        className="example_e"
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    ))
    }
    return (
        <>
            {options}
        </>
    );
};

export default Search;
