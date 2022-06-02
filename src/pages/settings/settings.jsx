import React, {useContext, useEffect, useState} from 'react';
import {Navigate} from 'react-router-dom';

import useFetch from "../../hooks/useFetch";
import {CurrentUserContext} from "../../context/currentUser";
import BackendErrorMessages from "../../components/BackendErrorMessages";
import useLocalStorage from "../../hooks/useLocalStorage";

const Settings = () => {
    const [currentUserState, dispatch] = useContext(CurrentUserContext);
    const apiUrl = '/user';
    const [{response, error}, doFetch] = useFetch(apiUrl);
    const [image, setImage] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSuccessfulLogout, setIsSuccessfulLogout] = useState(false);
    const [, setToken] = useLocalStorage('token');

    const handleSubmit = (e) => {
        e.preventDefault(e);
        doFetch({
            method: 'put',
            data: {
                user: {
                    ...currentUserState.currentUser,
                    image,
                    username,
                    bio,
                    email,
                    password
                }
            }
        })
    }

    const logout = (e) => {
        e.preventDefault();
        setToken('');
        dispatch({type: 'SET_UNAUTHORIZED'});
        setIsSuccessfulLogout(true);
    }

    useEffect(() => {
        if (!currentUserState.currentUser) {
            return;
        }

        const currentUser = currentUserState.currentUser;

        setImage(currentUser.image);
        setEmail(currentUser.email);
        setUsername(currentUser.username);
        setBio(currentUser.bio);
    }, [currentUserState.currentUser])

    useEffect(() => {
        if (!response) {
            return;
        }

        dispatch({type: 'SET_AUTHORIZED', payload: response.user})
    }, [response, dispatch])

    if (isSuccessfulLogout) {
        return <Navigate to='/' />
    }

    return (
        <div className="settings-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Your settings</h1>
                        {error && <BackendErrorMessages backendErrors={error.errors} />}
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder='URL of profile'
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder='Username'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <textarea
                                        className="form-control form-control-lg"
                                        placeholder='short bio'
                                        rows='8'
                                        value={bio}
                                        onChange={(e) => setBio(e.target.value)}
                                    ></textarea>
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder='Password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </fieldset>
                                <button type='submit' className='btn btn-lg btn-primary pull-xs-right'>
                                    Update settings
                                </button>
                            </fieldset>
                        </form>
                        <hr/>
                        <button className="btn btn-outline-danger" onClick={logout}>Or click here to logout.</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
