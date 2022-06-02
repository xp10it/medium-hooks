import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.scss';
import Routes from "./routes";
import {CurrentUserProvider} from "./context/currentUser";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import CurrentUserChecker from "./components/currentUserChecker";

const App = () => {
    return (
        <BrowserRouter>
            <CurrentUserProvider>
                <CurrentUserChecker>
                    <Header/>
                    <Routes/>
                </CurrentUserChecker>
            </CurrentUserProvider>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
