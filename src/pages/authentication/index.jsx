import React, {useState, useEffect} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Authentication = () => {
    const location = useLocation().pathname;

    const isLogin = location === '/login';

    const titleText = isLogin ? 'Login' : 'Registration';
    const link = isLogin ? 'Need an account' : 'Have an account?';
    const title = document.title = titleText;
    const submit = isLogin ? 'Sign-in' : 'Sign-up';
    const requestUrl = isLogin ? '/users/login' : '/users';

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [{response, isLoading, error}, doFetch] = useFetch(requestUrl);

    console.log(username)

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = isLogin ? {email, password} : {username, email, password};

        doFetch({
            method: 'post',
            data: {user}
        })
    }

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">{titleText}</h1>
                        <p className="text-xs-center">
                            <NavLink to="/register">{link}</NavLink>
                        </p>
                        <form onSubmit={handleSubmit}>
                            {!isLogin
                                ? <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="username"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                </fieldset>
                                : null
                            }
                            <fieldset className="form-group">
                                <fieldset className="form-group">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </fieldset>
                                <button className="btn btn-lg btn-primary pull-xs-right"
                                        type="submit"
                                        disabled={isLoading}
                                >
                                    {submit}
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Authentication;