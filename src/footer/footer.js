import React from 'react';
import './footer.scss';

let siteName = "Peter Hoggarth";
let email = "me@peterhoggarth.com"

class Footer extends React.Component {
    render() {
        return ( 
			<div className = "footer" >
            	{siteName} <a href={"mailto:" + email}>{email}</a>
            </div>
        );
    }
}

export default Footer;