import React, { useEffect } from 'react';

const FacebookLogin = () => {

    useEffect(() => {
        // Initialize the Facebook SDK
        window.fbAsyncInit = function() {
            window.FB.init({
                appId      : '986417649988258', // Replace with your Facebook app ID
                cookie     : true,  // Enable cookies to allow the server to access the session
                xfbml      : true,  // Parse social plugins on this webpage
                version    : 'v21.0' // Use this Graph API version for this call
            });

            // Check login status
            window.FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
        };

        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, []);

    // Handle login status change
    const statusChangeCallback = (response) => {
        console.log('Facebook login status:', response);
        if (response.status === 'connected') {
            // Logged into your app and Facebook
            console.log('User is logged in and authenticated.');
            getFacebookUserData();
        } else {
            // Not authenticated
            console.log('User is not authenticated.');
        }
    };

    // Fetch user data from Facebook
    const getFacebookUserData = () => {
        window.FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name);
            // Handle the user data as needed
        });
    };

    // Trigger Facebook Login
    const handleFacebookLogin = () => {
        window.FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome! Fetching your information.... ');
                getFacebookUserData();
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, {scope: 'public_profile,email'});
    };

    return (
        <div style={{paddingTop: '12rem'}}>
            <h1>Login with Facebook</h1>
            <button onClick={handleFacebookLogin}>Login with Facebook</button>
        </div>
    );
};

export default FacebookLogin;