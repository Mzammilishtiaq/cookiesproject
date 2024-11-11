import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { LoginSocialGoogle } from 'reactjs-social-login';
import { GoogleLoginButton } from 'react-social-login-buttons';
// import setCookis from '../Hooks/setCookis';
// import getCookies from '../Hooks/getCookies'
// import removeCookies from '../Hooks/removeCookies'
import { useNavigate } from 'react-router-dom'
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';


function Login() {
    // const [userdata, setUserData]= useState([])
    const navigate = useNavigate();
    const clientId = '127697842518-lf24504ndg00p4ers05hkmvqnmeniack.apps.googleusercontent.com'
    const handleSuccess = (response) => {
        const token = response.credential;
        console.log('Access Token:', token);
        // Use the token to make API requests
    };

    const handleError = () => {
        console.error('Login Failed');
    };

    return (
        <div className='m-5'>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {/* <GoogleOAuthProvider >
                <div>
                    <h2>Login with Google</h2>
                    <GoogleLogin
                    clientId={clientId}
                        onSuccess={handleSuccess}
                        onError={handleError}
                        scope="https://www.googleapis.com/auth/business.manage"
                    />
                </div>
            </GoogleOAuthProvider> */}

            <LoginSocialGoogle
                client_id={clientId}
                scope="https://www.googleapis.com/auth/business.manage"
                discoveryDocs="claims_supported"
                access_type="offine"
                onResolve={({ provider, data }) => {
                    // removeCookies('userlink');
                    // setCookis('usercookiesname', JSON.stringify(data));
                    //    setUserData(JSON.stringify(data));
                    console.log(data,provider);
                    sessionStorage.setItem('ProfileData', JSON.stringify(data))
                    sessionStorage.setItem('Token', JSON.stringify(data.access_token))
                    // console.log(sessionStorage.getItem('Token'))
                    navigate('/reviews')
                }}
                onReject={err => {
                    console.log(err);
                }}
            >
                <GoogleLoginButton />
            </LoginSocialGoogle>



        </div>
    )
}

export default Login
