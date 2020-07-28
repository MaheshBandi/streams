import React from 'react';

export class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'561355756938-cs71jitvre5ftoqev3n37kp1jrcj5ol6.apps.googleusercontent.com',
                scope:'email'
            });
        });
    }
    render(){
        return(
            <div>Google Auth</div>
        );
    }
}