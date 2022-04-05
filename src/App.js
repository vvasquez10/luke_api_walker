import './App.css';
import Response from './Components/Response'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Formulario from './Components/Formulario';

function App( props ) {

  const [responseData, setResponseData] = useState(null);
  const [categoria, setCategoria] = useState("people");
  const [identificador, setIdentificador] = useState();

  //`https://swapi.dev/api/films/1/`

  /*
  useEffect( () => {
    console.log(categoria, identificador);
    axios.get( `https://swapi.dev/api/${categoria}/${identificador}/` )
      .then( response => {
        const result = response.data;
        setResponseData( result );         
      })
      .catch( err => {
        console.log(err);
      });     
  }, [categoria, identificador]);
  
  */
  const consumeAPI = () => {
    axios.get( `https://swapi.dev/api/${categoria}/${identificador}/` )
    .then( response => {
      const result = response.data;
      setResponseData( result );         
    })
    .catch( err => {
      console.log(err);
    }); 
  }

  const handleRequest = (e) =>{
    e.preventDefault();
    setCategoria( e.target.category.value.toLowerCase() );
    setIdentificador( Number(e.target.id.value) );
    
    console.log(categoria, identificador);     
    
    consumeAPI(); 
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
