import React, { Component } from 'react';
import Photos from './Photos';
import NavTab from './NavTab';


// const tab_images = [
//   { src: require('./Tabs/all_Tab_active.png')},
//   { src: require('./Tabs/orig_Tab.png')},
//   { src: require('./Tabs/fan_Tab.png')},
//   { src: require('./Tabs/prac_Tab.png')},
//   { src: require('./Tabs/hol_Tab.png')}
// ];

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((numbers) =>
//   <li>{numbers}</li>
// );

class Navigation extends Component {

	generateTab (item){
    	return <NavTab index={item.index} source={item.src} active={item.active} />
	}


	render(){
		//const data = this.props.tabs.map(this.generateTab);
		return(
			<div className="topnav">
				<ul className="tab-containers">
					<NavTab check={this.props.check} />
				</ul>
			</div>
		);
	}
}


export default Navigation;