import React, {useState, useEffect} from 'react';

const auxObject = {
    people: ["name", "height", "mass", "birth_year"],
    films: ["title", "director", "producer", "characters"],
    starships: ["name", "model", "manufacturer", "max_atmosphering_speed"],
    species: ["name", "classification", "designation", "skin_colors"],
    vehicles: ["name", "model", "manufacturer", "passengers"],
    planets: ["name", "rotation_period", "climate", "population"],
}
  

function Response ( props ) {

    /*
    let urlID = Number(props.match.params.id);

    console.log(urlID);

    if(urlID !== undefined){
        props.setIdentificador(urlID);
        props.setCategoria("people");
        props.consumeAPI();
    }
*/

    return(
        <>            
            {props.responseData &&                  
                <div>                   
                    <h2>{props.responseData[auxObject[props.categoria][0]]}</h2>                             
                    <h3>{props.responseData[auxObject[props.categoria][1]]}</h3>
                    <h3>{props.responseData[auxObject[props.categoria][2]]}</h3>
                    <h3>{props.responseData[auxObject[props.categoria][3]]}</h3>                  
                </div>
            }                  
        </>
    );

}

export default Response;
//<h2>{props.resultado.name}</h2>   