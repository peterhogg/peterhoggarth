import React from 'react';
import ReactDOM from 'react-dom';

let year= (new Date()).getFullYear();
class Footer extends React.Component {
    render() {
        return ( 
			<div className = "footer" >
            	{this.props.siteName} &copy; {year}
            </div>
        );
    }
}

export default Footer;