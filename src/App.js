import './App.css';
import Response from './Components/Response'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Formulario from './Components/Formulario';


const categories = ["People", "Films", "Starships", "Vehicles", "Species", "Planets"];

function App( props ) {

  const [responseData, setResponseData] = useState(null);
  const [categoria, setCategoria] = useState("");
  const [identificador, setIdentificador] = useState("");

  //`https://swapi.dev/api/films/1/`

  
  useEffect( () => {
    axios.get( `https://swapi.dev/api/${categoria}/${identificador}/` )
      .then( response => {
        const result = response.data;
        setResponseData( (resultPrev) => result ); 
        
      })
      .catch( err => {
        console.log(err);
      });     
  }, [categoria]);
  


  const handleRequest = (e) =>{
    e.preventDefault();
    setCategoria( (categoriaPrev) => e.target.category.value.toLowerCase() );
    setIdentificador( (identificadorPrev) => Number(e.target.idInput.value) );
    console.log(categoria, identificador);
  };

  return (
    <div className="App">   
      <div>        
        <Formulario handleRequest={handleRequest}/>                
      </div>  
      <div className="Result">
        <Response responseData={responseData} categoria = {categoria}/>          
      </div>
    </div>
  );
}

export default App;
