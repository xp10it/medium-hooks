import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Authentication = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [{response, isLoading, error}, doFetch] = useFetch('/users/login');

    console.log('foo', response, isLoading, error);

    const handleSubmit = (e) => {
        e.preventDefault();
        doFetch({
            method: 'post',
            data: {
                users: {
                    email: 'qq@qq.COM',
                    password: '123'
                }
            }
        })
    }

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">login</h1>
                        <p className="text-xs-center">
                            <NavLink to="/register">Need an account?</NavLink>
                        </p>
                        <form onSubmit={handleSubmit}>
                            <fieldset className="form-group">
                                <fieldset className="form-group">
                                    <input
                                        type="text"
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
                                    Sign-in
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