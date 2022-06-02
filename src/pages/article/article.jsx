import React, {useEffect} from 'react';
import {NavLink, useLocation} from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import TagList from "../../components/TagList";

const Article = () => {
    const slug = useLocation().pathname.slice(10);
    const apiUrl = `/articles/${slug}`;
    const [{response, error, isLoading}, doFetch] = useFetch(apiUrl);

    useEffect(() => {
        doFetch();
    }, [doFetch])

    return (
        <div className='article-page'>
            <div className="banner">
                {!isLoading && response && (
                    <div className='container'>
                        <h1>{response.article.title}</h1>
                        <div className="article-meta">
                            <NavLink to={`/profiles/${response.article.author.username}`}>
                                <img src={response.article.author.image} alt=""/>
                            </NavLink>
                            <div className="info">
                                <NavLink to={`/profiles/${response.article.author.username}`}>
                                    {response.article.author.username}
                                </NavLink>
                                <span className="date">
                                    {response.article.createdAt}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="container page">
                {isLoading && <Loading/>}
                {error && <Error/>}
                {!isLoading && response && (
                    <div className='row article-content'>
                        <div className="col-xs-12">
                            <div>
                                <p>{response.article.body}</p>
                            </div>
                            <TagList tags={response.article.tagList}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Article;
