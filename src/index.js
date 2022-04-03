import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from "react-router-dom"

import {ChakraProvider} from "@chakra-ui/react"
import {ColorModeScript} from "@chakra-ui/react"


ReactDOM.render(
  <BrowserRouter>
  <ChakraProvider>
    <ColorModeScript initialColorMode='light'/>
     <App /> 
  </ChakraProvider>
  </BrowserRouter>

  , document.getElementById("root")
  
  )



reportWebVitals();
