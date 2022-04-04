import React, {useState, useEffect} from 'react';

const categories = ["People", "Ships", "Starships", "Vehicles", "Species", "Planets"];

function Formulario ( props ) {

    return (
        <div>
          <form className="SearchCategory" onSubmit={ (e) => props.handleRequest(e)}>
            <div className="Category">
              <label htmlFor='category'>Search for: </label>
              <select id='category'>
                {categories.map((cat, index) => { 
                  return(
                    <option key={index}>{cat}</option>
                  );
                })}               
              </select>
            </div>

            <div className="Id">
              <label htmlFor='idInput'>ID: </label>
              <input id="idInput" type="number"></input>
            </div>
            <input type="submit" value="Search" />     
          </form>
        </div> 
    );
}

export default Formulario;