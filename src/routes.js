import {Route, Routes} from 'react-router-dom';
import React from "react";

import GlobalFeed from "./pages/globalFeed/globalFeed";
import Article from "./pages/article/article";
import Authentication from "./pages/authentication/authentication";
import TagFeed from "./pages/tagFeed/tagFeed";
import YourFeed from './pages/yourFeed/yourFeed';
import CreateArticle from "./pages/createArticle/createArticle";
import EditArticle from "./pages/editArticle/editArticle";

export default () => {
    return (
        <Routes>
            <Route path='/' element={<GlobalFeed/>}/>
            <Route path='/tags/:slug' element={<TagFeed/>}/>
            <Route path='/articles/new' element={<CreateArticle/>}/>
            <Route path='/articles/:slug/edit' element={<EditArticle/>}/>
            <Route path='/articles/:slug' element={<Article/>}/>
            <Route path='/feed' element={<YourFeed/>}/>
            <Route path='/login' element={<Authentication/>}/>
            <Route path='/registration' element={<Authentication/>}/>
            <Route path='/articles/:slug' element={<Article/>}/>
        </Routes>
    )
}