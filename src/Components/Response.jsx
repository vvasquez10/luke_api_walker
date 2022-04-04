import React, {useState, useEffect} from 'react';
import axios from 'axios';

const peopleProps = ['name', 'height', 'mass', 'birth_year'];
const filmsProps = ['title', 'director', 'producer', 'characters'];
const starshipsProps = ['name', 'model', 'manufacturer', 'max_atmosphering_speed'];
const speciesProps = ['name', 'classification', 'designation', 'skin_colors'];
const vehiclesProps = ['name', 'model', 'manufacturer', 'passengers'];
const planetsProps = ['name', 'rotation_period', 'climate', 'population'];

function Response ( props ) {

    const [paramList, setParamList] = useState( [] );

       
    switch(props.categoria) {
        case 'people':
            setParamList( (paramListPrev) => [...peopleProps] ); 
            break;
        case 'films':
            setParamList( (paramListPrev) => [...filmsProps] );
            break;
        case 'starships':
            setParamList( (paramListPrev) => [...starshipsProps] );
            break;
        case 'species':
            setParamList( (paramListPrev) => [...speciesProps] );
            break;
        case 'vehicles':
            setParamList( (paramListPrev) => [...vehiclesProps] );
            break;
        case 'planets':
            setParamList( (paramListPrev) => [...planetsProps] );
            break;
        default:
            console.log("Error al cargar los parametros.");
        } 
    

    return(
        <>            
            {props.responseData &&   
                <>
                    <h2>{props.responseData[paramList[0]]}</h2>                             
                    <li>{props.responseData[paramList[1]]}</li>
                    <li>{props.responseData[paramList[2]]}</li>
                    <li>{props.responseData[paramList[3]]}</li>
                    
                </>
            }                  
        </>
    );

}

export default Response;
//<h2>{props.resultado.name}</h2>   