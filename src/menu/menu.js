import React from 'react';
import './menu.scss';

//TODO: Get this from some sort of database
let menu_items = [
	{
	"key"  : 1,
	"name" : "Projects",
	"url"  : "#projects"	
	}
];

//Define how individual menu items are to be rendered
let items = menu_items.map(function(item){
	return <a className="link" href={"/" + item.url} data-scroll="">{item.name}</a>;
})

class Menu extends React.Component {
	constructor(props) {
		super(props);
	
		this.state={
		  items,
		}
	}
    render() {
        return ( 
			<div className = "menu" >
				{items}
			</div>
		);
	}
}

export default Menu;

