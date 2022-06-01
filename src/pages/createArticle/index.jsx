import React from 'react';
import ArticleForm from "../articleForm";

const CreateArticle = () => {
    const errors = {};
    const initialValue = {};
    const handleSubmit = data => {
        console.log(data)
    }
    return (
        <div className="">
            <ArticleForm
                errors={errors}
                initialValues={initialValue}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default CreateArticle;
