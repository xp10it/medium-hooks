import React, {useContext, useEffect, useState} from 'react';
import ArticleForm from "../articleForm/articleForm";
import useFetch from "../../hooks/useFetch";
import {Navigate} from "react-router-dom";
import {CurrentUserContext} from "../../context/currentUser";

const CreateArticle = () => {
    const apiUrl = '/articles';
    const [{response, error}, doFetch] = useFetch(apiUrl);
    const [CurrentUserState] = useContext(CurrentUserContext);
    const errors = {};
    const initialValues = {
        title: '',
        description: '',
        body: '',
        tagList: []
    };
    const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false);
    const handleSubmit = article => {
        doFetch({
            method: 'post',
            data: {
                article
            }
        })
    }
    useEffect(() => {
        if (!response) {
            return;
        }

        setIsSuccessfulSubmit(true);
    }, [response])
    if (CurrentUserState.isLoggedIn === false) {
        return <Navigate to='/' />
    }
    if (isSuccessfulSubmit) {
        return <Navigate to={`/articles/${response.article.slug}`} />
    }
    return (
        <div>
            <ArticleForm
                errors={(error && error.errors) || {}}
                initialValues={initialValues}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default CreateArticle;
