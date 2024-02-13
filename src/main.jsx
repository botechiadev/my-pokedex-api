import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {BrowserRouter} from "react-router-dom";
import {ApiProvider} from "./common/context/api-context.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <>
        <BrowserRouter>
            <ApiProvider>
       <App />
            </ApiProvider>
        </BrowserRouter>
        </>
    </React.StrictMode>
)
