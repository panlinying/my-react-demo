import uuid from 'node-uuid';
import React from 'react';
//import Note from './Note.jsx';

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			notes:[
				{
					id:uuid.v4(),
					task:'li--1'
				},
				{
					id:uuid.v4(),
					task:'li--2'
				}
			]
		};
	}
	render(){
		const notes = this.state.notes;
		return(
			<div>
				<button onClick={this.addNote}>+</button>
				<button onClick={this.deleteNote}>-</button>
				<ul>
					{
						notes.map((note) =>
						<li key={note.id}>
							{note.task}
						</li>)
					}
				</ul>
			</div>
		);
	}
	addNote = () =>{
		this.setState({
			notes:this.state.notes.concat(
				[
					{
						id:uuid.v4(),
						task:'new task'
					}
				]
			)
		});
		/*this.deleteState({
			notes:this.state.notes.concat(
				[
					{
						id:uuid.v4(),
						task:'new task'
					}
				]
			)
		});*/
		
	};

}