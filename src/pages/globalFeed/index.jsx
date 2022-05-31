import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import useFetch from "../../hooks/useFetch";
import Feed from "../../components/Feed";
import Pagination from "../../components/Pagination";
import {getPaginator, limit} from "../../utils/utils";
import {stringify} from "query-string";
import PopularTags from "../../components/PopularTags";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const GlobalFeed = () => {
    const location = useLocation();

    const {offset, currentPage} = getPaginator(location.search);
    const stringifiedParams = stringify({
        limit,
        offset
    })

    const apiUrl = `/articles?${stringifiedParams}`;
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);
    const url = location.pathname;

    useEffect(() => {
        doFetch();
    }, [doFetch, currentPage])

    return (
        <div className="home-page">
            <div className="banner">
                <div className="container">
                    <h1>Medium clone</h1>
                    <p>A place to share knowledge</p>
                </div>
            </div>
            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        {isLoading && <Loading />}
                        {error && <Error />}
                        {!isLoading && response && (
                            <>
                                <Feed articles={response.articles}/>
                                <Pagination
                                    total={response.articlesCount}
                                    limit={limit}
                                    currentPage={currentPage}
                                    url={url}
                                />
                            </>
                        )}
                    </div>
                    <div className="col-md-3">
                        <PopularTags />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalFeed;
