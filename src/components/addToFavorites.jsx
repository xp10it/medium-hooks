import React from 'react';
import useFetch from "../hooks/useFetch";

const AddToFavorites = ({isFavorited, favoritesCount, articleSlug}) => {
    const apiUrl = `/articles/${articleSlug}/favorite`;
    const [{response}, doFetch] = useFetch(apiUrl);
    const responseFavoritesCount = response
        ? response.article.favoritesCount
        : favoritesCount

    const isFavoritedWithResponse = response
        ? response.article.favorited
        : isFavorited

    const handleLike = (e) => {
        e.preventDefault();
        doFetch({
            method: isFavoritedWithResponse ? 'delete' : 'post'
        })
    };
    return (
        <button
            className={
                isFavoritedWithResponse
                    ? 'btn btn-sm btn-primary'
                    : 'btn btn-sm like'
            }
            onClick={handleLike}
        >
            <i className="ion-heart"></i>
            <span>&nbsp;{responseFavoritesCount}</span>
        </button>
    );
};

export default AddToFavorites;
