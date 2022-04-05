import './App.css';
import Response from './Components/Response'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Formulario from './Components/Formulario';
import {BrowserRouter, Route} from 'react-router-dom';

function App( props ) {

  const [responseData, setResponseData] = useState(null);
  const [categoria, setCategoria] = useState("");
  const [identificador, setIdentificador] = useState();

  //`https://swapi.dev/api/films/1/`

  
  useEffect( () => {
    if (categoria !== ""){
      axios.get( `https://swapi.dev/api/${categoria}/${identificador}/` )
      .then( response => {
        const result = response.data;
        setResponseData( result );         
      })
      .catch( err => {
        console.log(err);
      });  
    }       
  }, [categoria, identificador]);
  
  /*
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
  */

  const handleRequest = (e) =>{
    e.preventDefault();
    setCategoria( e.target.category.value.toLowerCase() );
    setIdentificador( Number(e.target.id.value) );    
  };

  /*
  const doNow = (props) => {
    setCategoria("people");
    setIdentificador(props.match.id);
  }
  */

  return (
    <BrowserRouter>
      <div className="App">   
      <Route exact path="/" render = { (routeProps) => 
        <>
          <div>        
            <Formulario handleRequest={handleRequest}/>                
          </div>  
          <div className="Result">
            <Response responseData={responseData} categoria = {categoria}/>          
          </div>
        </>
      } /> 

      <Route exact path="/:id" render= {(routeProps) => <Response {...routeProps} setIdentificador={setIdentificador(Number(routeProps.match.params.id))} setCategoria={setCategoria("people")}  /> } />
      
      </div>
    </BrowserRouter>

  );
}

export default App;
