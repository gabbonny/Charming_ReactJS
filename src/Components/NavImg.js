import React, { Component } from 'react';


class NavImg extends Component {


	render(){
		return(
			<img src={require(this.props.source)} />
		);
	}
}


export default NavImg;