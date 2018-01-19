import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Footer from './footer/footer.js';
import Header from './header/header.js'
  
  ReactDOM.render(
	<div>
		<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" />
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    	<link rel="stylesheet" href="//cdn.rawgit.com/konpa/devicon/master/devicon.min.css" />
		<Header />
		<Footer/>
	</div>,
	document.getElementById('root')
  );