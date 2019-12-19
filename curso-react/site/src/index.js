import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom' // BrowserRouter é para "escutar" o navegador.

import { Provider } from 'react-redux' // componente do react-redux que é onde a Store vai ficar salva
import { createStore } from 'redux' // criadora da store
import reducers from './reducers' //

// BrowserRouter envolve nosso App inteiro
ReactDOM.render(
    <BrowserRouter> 
        <Provider store={createStore(reducers)}> {/* Onde ficará salvo nossa store */}
            <App />
        </Provider>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
