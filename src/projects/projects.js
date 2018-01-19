import React from 'react';
import './projects.scss';

let project_data = [
	{
		name : "Voxel Game",
		img : "/img/VoxelGame.png",
		desc : "A block building game made in Unity3D. Explore the 3D plane, modifying the blocks, and build whatever you please.",
		link : "https://github.com/peterhogg/voxel_game"
	},
	{
		name : "Tron Game",
		img : "/img/Tron.png",
		desc : "My attempt at creating the classic lite cycle game using python's pygame library. This game has support for 2 players",
		link : "https://github.com/peterhogg/tron"
	}
];
let callout = "Check it out";
//Define how individual projects are to be rendered
let projects = project_data.map(function(item, index){
	return (
	<div className="row user-projects" key={index}>
		<div className="six columns images">
			<img alt={item.name} src={item.img} />
		</div>
		<div className="six columns">
			<h5> {item.name} </h5>
			<p> {item.desc} </p>
			<a className="project-link" href={item.link}>{callout}</a>
		</div>
	</div>
	);
})

class Projects extends React.Component {
    render() {
        return ( 
			<div className="projects container" id="projects">
				<h3> Projects </h3>
				{projects}
			</div>
        );
    }
}

export default Projects;
