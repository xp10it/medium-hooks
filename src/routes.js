import {Route, Routes} from 'react-router-dom';
import React from "react";

import GlobalFeed from "./pages/globalFeed";
import Article from "./pages/article";
import Authentication from "./pages/authentication";

export default () => {
    return (

        <Routes>
            <Route path='/' element={<GlobalFeed/>}/>
            <Route path='/login' element={<Authentication/>}/>
            <Route path='/registration' element={<Authentication/>}/>
            <Route path='/articles/:slug' element={<Article/>}/>
        </Routes>
    )
}