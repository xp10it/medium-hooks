import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from "./routes";
import {CurrentUserProvider} from "./context/currentUser";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <CurrentUserProvider>
            <Header/>
                <Routes/>
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
