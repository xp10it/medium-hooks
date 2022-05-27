import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from "react";

import GlobalFeed from "./pages/globalFeed";
import Article from "./pages/article";
import Header from "./components/Header";
import Authentication from "./pages/authentication";

export default () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<GlobalFeed/>}/>
                <Route path='/login' element={<Authentication/>}/>
                <Route path='/registration' element={<Authentication/>}/>
                <Route path='/articles/:slug' element={<Article/>}/>
            </Routes>
        </BrowserRouter>
    )
}