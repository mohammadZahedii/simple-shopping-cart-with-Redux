import React from 'react';
import ReactDOM from 'react-dom';
//import './App.css';
// import '@material/banner/dist/mdc.banner.min.css'
// import '@material/button/dist/mdc.button.min.css'
// import { ThemeProvider } from '@mui/material/styles'
// import theme from './Blog-Page/Theme/Theme'
import App from './Redux/project2/App'
// import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
//import reducer from './Redux/project2/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import {createLogger} from 'redux-logger'
import reducers from './Redux/project2/reducers'

const middlwWare=[];
if(process.NODE_ENV !== 'production'){
  middlwWare.push(createLogger())
}

const store =createStore(reducers,composeWithDevTools(applyMiddleware(...middlwWare)))

ReactDOM.render(
    <Provider store={store}>
         <App/>

    </Provider>  

  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); 


//**************************************** */

// har directory ye file e pish farz mitune dashte bashe ba onvane index.js
// ke niaz nist ma un file e dakhele directory ro seda bezanim
// ba seda kardane esme un pooshe,file e index.js dakhele un pooshe 
// be soorate pish farz import mishe
//exp:    ./reducers/index =====> ./reducers

//************************************** */