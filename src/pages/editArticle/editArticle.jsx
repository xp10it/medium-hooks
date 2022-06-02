import React, {useEffect, useState, useContext} from 'react';
import {Navigate, useParams} from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import ArticleForm from "../articleForm/articleForm";
import {CurrentUserContext} from "../../context/currentUser";

const EditArticle = () => {
    let slug = useParams().slug;
    const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false);
    const apiUrl = `/articles/${slug}`;
    const [{
        response: updateArticleResponse,
        error: updateArticleError
    }, doUpdateArticle] = useFetch(apiUrl);

    const [{response: fetchArticleResponse}, doFetchArticle] = useFetch(apiUrl);
    const [currentUserState] = useContext(CurrentUserContext);
    const [initialValues, setInitialValues] = useState(null);

    const onSubmit = (article) => {
        doUpdateArticle({
            method: 'put',
            data: {
                article
            }
        })
    }

    useEffect(() => {
        doFetchArticle();
    }, [doFetchArticle])

    useEffect(() => {
        if (!fetchArticleResponse) {
            return;
        }

        setInitialValues({
            title: fetchArticleResponse.article.title,
            description: fetchArticleResponse.article.description,
            body: fetchArticleResponse.article.body,
            tagList: fetchArticleResponse.article.tagList
        })
    }, [fetchArticleResponse])

    useEffect(() => {
        if (!updateArticleResponse) {
            return;
        }
        setIsSuccessfulSubmit(true);
    }, [updateArticleResponse])

    if (currentUserState.isLoggedIn === null) {
        return null;

    }
    if (currentUserState.isLoggedIn === false) {
        return <Navigate to="/"/>
    }

    if (isSuccessfulSubmit) {
        const slug = updateArticleResponse.article.slug
        return <Navigate to={`/articles/${slug}`}/>
    }

    return (
        <ArticleForm
            onSubmit={onSubmit}
            errors={(updateArticleError && updateArticleError.errors) || {}}
            initialValues={initialValues}
        />
    );
};

export default EditArticle;
