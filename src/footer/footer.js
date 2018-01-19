import React from 'react';
import ReactDOM from 'react-dom';
import './footer.scss';

let siteName = "Peter Hoggarth";
let email = "me@peterhoggarth.com"

let year= (new Date()).getFullYear();
class Footer extends React.Component {
    render() {
        return ( 
			<div className = "footer" >
            	{siteName} &copy; {year} <a href={"mailto:" + email}>{email}</a>
            </div>
        );
    }
}

export default Footer;