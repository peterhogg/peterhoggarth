import React from 'react';
import ReactDOM from 'react-dom';
import './header.scss';

class Header extends React.Component {
    render() {
        return ( 
			<div className = "header" >
				<div id="particles-js">
					<div className="content">
						<h1>
							<span className="site-title">Peter Hoggarth</span>
							<span className="site-description">Software Developer</span>
						</h1>
						<div className="icons-header">
							<a aria-label="Send email" href="mailto:me@peterhoggarth.com"><i className="icon fa fa-envelope"></i></a>
							<a aria-label="My Github" target="_blank" href="https://github.com/peterhogg"><i className="icon fa fa-github-alt" aria-hidden="true"></i></a>
						</div>
						<a className="link" href="#projects" data-scroll="">Projects</a>
					</div>
				<a className="down" href="#about" data-scroll=""><i className="icon fa fa-chevron-down" aria-hidden="true"></i></a>
				<canvas className="particles-js-canvas-el" width="938" height="922"></canvas></div>
			</div>
		);
	}
}

export default Header;