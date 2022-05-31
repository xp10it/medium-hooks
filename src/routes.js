import {Route, Routes} from 'react-router-dom';
import React from "react";

import GlobalFeed from "./pages/globalFeed";
import Article from "./pages/article";
import Authentication from "./pages/authentication";
import TagFeed from "./pages/tagFeed";
import YourFeed from './pages/yourFeed';

export default () => {
    return (
        <Routes>
            <Route path='/' element={<GlobalFeed/>}/>
            <Route path='/tags/:slug' element={<TagFeed/>}/>
            <Route path='/feed' element={<YourFeed/>}/>
            <Route path='/login' element={<Authentication/>}/>
            <Route path='/registration' element={<Authentication/>}/>
            <Route path='/articles/:slug' element={<Article/>}/>
        </Routes>
    )
}