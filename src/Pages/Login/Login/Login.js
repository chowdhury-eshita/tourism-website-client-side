import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="my-5 pt-5">
            <h2 className="pb-3">Please Login!</h2>
            <button onClick={handleGoogleLogin} className="btn btn-primary">Google Sign in</button>
        </div>
    );
};

export default Login;