import React, {useEffect} from 'react';
import {NavLink, useLocation, useParams} from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import UserArticles from "../../components/userArticles";

const UserProfile = () => {
    const slug = useParams().slug;
    const location = useLocation();
    const isFavorites = location.pathname.includes('favorites');
    const apiUrl = `/profiles/${slug}`;
    const [{response}, doFetch] = useFetch(apiUrl);

    console.log(isFavorites)

    useEffect(() => {
        doFetch();
    }, [doFetch])

    if (!response) {
        return null;
    }

    return (
        <div className='profile-page'>
            <div className="user-info">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-10 offset-md-1">
                            <img className="user-img" src={response.profile.image} alt=""/>
                            <h4>{response.profile.username}</h4>
                            <p>{response.profile.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-10 offset-md-1">
                        <div className="articles-toggle">
                            <ul className="nav nav-pills outline-active">
                                <li className="nav-item">
                                    <NavLink
                                        className={isFavorites ? 'nav-link nav-link_inactive' : 'nav-link active'}
                                        to={`/profiles/${response.profile.username}`}
                                    >
                                        My Posts
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className='nav-link'
                                        to={`/profiles/${response.profile.username}/favorites`}
                                    >
                                        Favorites Posts
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <UserArticles
                            username={response.profile.username}
                            location={location}
                            isFavorites={isFavorites}
                            url={location.pathname}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
