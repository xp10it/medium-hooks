import React, {useEffect} from 'react';

import {getPaginator, limit} from "../utils/utils";
import {stringify} from "query-string";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import Pagination from "./Pagination";
import Error from "./Error";
import Feed from "./Feed";
import {useLocation} from "react-router-dom";

const getApiUrl = ({username, offset, isFavorites}) => {
    const params = isFavorites
        ? {limit, offset, favorited: username}
        : {limit, offset, author: username}

    return `/articles?${stringify(params)}`;
}

const UserArticles = ({username, isFavorites, url}) => {
    const searching = useLocation().search;
    const {offset} = getPaginator(searching);
    const apiUrl = getApiUrl({username, offset, isFavorites});
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);

    useEffect(() => {
        doFetch();
    }, [doFetch, isFavorites])

    return (
        <div>
            {isLoading && <Loading/>}
            {error && <Error/>}
            {!isLoading && response && (
                <>
                    <Feed articles={response.articles}/>
                    <Pagination
                        total={response.articlesCount}
                        limit={limit}
                        url={url}
                    />
                </>
            )}
        </div>
    );
};

export default UserArticles;
