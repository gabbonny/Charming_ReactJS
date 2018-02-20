import React, { Component } from 'react';
import Photos from './Photos';
import NavImg from './NavImg';
import orig from './Tabs/orig_Tab.png';
import orig_active from './Tabs/orig_Tab_active.png';
import all from './Tabs/all_Tab.png';
import all_active from './Tabs/all_Tab_active.png';
import fan from './Tabs/fan_Tab.png';
import fan_active from './Tabs/fan_Tab_active.png';
import prac from './Tabs/prac_Tab.png';
import prac_active from './Tabs/prac_Tab_active.png';
import hol from './Tabs/hol_Tab.png';
import hol_active from './Tabs/hol_Tab_active.png';


			//<li className="active"><a href="#tab1"><img src={require('./Tabs/all_Tab_active.png')} /></a></li>
// <li className="active"><a href="#tab1"><img src={require('./Tabs/all_Tab_active.png')} /></a></li>
// 			<li><a href="#tab2"><img src={require('./Tabs/orig_Tab.png')} /></a></li>
// 			<li><a href="#tab3"><img src={require('./Tabs/fan_Tab.png')} /></a></li>
// 			<li><a href="#tab4"><img src={require('./Tabs/prac_Tab.png')} /></a></li>
// 			<li><a href="#tab4"><img src={require('./Tabs/hol_Tab.png')} /></a></li>
// 			<li><a href="javascript:void(0);" className="hamburger" onclick="myHamburger()">&#9776;</a></li>
class NavTab extends Component {
	//onClick (index, active){}
	constructor(props) {
    super(props);
    this.state = {
       allSrc: all_active,
       origSrc: orig,
       fanSrc: fan,
       pracSrc: prac,
       holSrc: hol
    };

    //the function that handles changing the img source when clicked
    this.handleAllClicked = this.handleAllClicked.bind(this);
    this.handleOrigClicked = this.handleOrigClicked.bind(this);
    this.handleFanClicked = this.handleFanClicked.bind(this);
    this.handlePracClicked = this.handlePracClicked.bind(this);
    this.handleHolClicked = this.handleHolClicked.bind(this);

  }

  handleAllClicked(){
    //this.props.check = "all";
  	this.setState({
      check :"all",
      allSrc: all_active,
        origSrc: orig,
        fanSrc: fan,
        pracSrc: prac,
        holSrc: hol

    });

  }

  handleOrigClicked(){
    //this.props.check = "orig";
  	this.setState({
      check :"orig",
      origSrc: orig_active,
        allSrc: all,
        fanSrc: fan,
        pracSrc: prac,
        holSrc: hol
    });
  
  }

  handleFanClicked(){
    //this.props.check = "fan";
  	this.setState({
      check :"fan",
      fanSrc: fan_active,
        allSrc: all,
        origSrc: orig,
        pracSrc: prac,
        holSrc: hol
    });
    
  }
  handlePracClicked(){
    //this.props.check = "prac";
  	this.setState({
      check :"prac",
      pracSrc: prac_active,
        allSrc: all,
        origSrc: orig,
        fanSrc: fan,
        holSrc: hol
    });
 
  }
  handleHolClicked(){

  	this.setState({
      check:"hol",
      holSrc: hol_active,
        allSrc: all,
        origSrc: orig,
        fanSrc: fan,
        pracSrc: prac
    });

  }


	render(){

		return(
			<div className="tab-links ">
				<li><img onClick={this.handleAllClicked} src={this.state.allSrc}/></li>
				<li><img onClick={this.handleOrigClicked} src={this.state.origSrc}/></li>
				<li><img onClick={this.handleFanClicked} src={this.state.fanSrc}/></li>
				<li><img onClick={this.handlePracClicked} src={this.state.pracSrc}/></li>
				<li><img onClick={this.handleHolClicked} src={this.state.holSrc}/></li>
			</div>

		);
	}
}


export default NavTab;