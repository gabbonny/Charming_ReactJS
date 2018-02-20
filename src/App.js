import React, { Component } from 'react';
import './index.css';
import Description from './Components/Description';
import Navigation from './Components/Navigation';
import Gallery from 'react-photo-gallery';
import PhotoItem from './Components/PhotoItem';
import Lightbox from 'react-images';
//import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

//this main app component will hold the 
//title, subtitle, description component, Navigation component, and Gallery Component


const all_photos = [
  { src: require('./charm_imgs/catLattes_2.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/deadpool_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/frapp_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/holidayCats_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/holidayTurtle_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/leo_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/magic_octo_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/ocarina_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/presents_2.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/bee.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/botw_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/chocolate_mac.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/cottoncandy_mac.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/fox.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/monkey.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/pumpkin.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/rocko_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/strawberry_mac.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/stripecats.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/twlight_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/windwaker_1.jpg'), width: 2, height: 2 }
];

const orig_photos = [
  { src: require('./charm_imgs/catLattes_2.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/leo_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/magic_octo_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/strawberry_mac.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/rocko_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/chocolate_mac.jpg'), width: 2, height: 2 }
];

const prac_photos = [
  { src: require('./charm_imgs/cottoncandy_mac.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/fox.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/monkey.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/pumpkin.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/presents_2.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/bee.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/stripecats.jpg'), width: 2, height: 2 }

];

const fan_photos = [
  { src: require('./charm_imgs/deadpool_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/ocarina_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/twlight_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/windwaker_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/botw_1.jpg'), width: 2, height: 2 }

];

const hol_photos = [
  { src: require('./charm_imgs/holidayCats_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/holidayTurtle_1.jpg'), width: 2, height: 2 },
  { src: require('./charm_imgs/presents_2.jpg'), width: 2, height: 2 },

];

const tabData = [
  {
    index: 1,
    src: './Tabs/all_Tab_active.png',
    active: true
  },
  {
    index: 2,
    src: './Tabs/orig_Tab.png',
    active: false
  },
  {
    index: 3,
    src: './Tabs/fan_Tab.png',
    active: false
  },
  {
    index: 4,
    src: './Tabs/prac_Tab.png',
    active: false
  },
  {
    index: 5,
    src: './Tabs/hol_Tab.png',
    active: false
  }]



class App extends Component {

  constructor() {
    super();
    this.state = { 
      currentImage: 0,
      photos: all_photos,  
      checkstring: "all" 
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.checkTab = this.checkTab.bind(this);
  }

  checkTab() {
    if (this.checkstring === "all"){
      this.setState({
        photos: all_photos
      });
    }else if (this.checkstring === "orig"){
      this.setState({
        photos: orig_photos
      });
      
    }else if (this.checkstring === "fan"){
      this.setState({
        photos: fan_photos
      });
      
    }else if (this.checkstring === "prac"){
      this.setState({
        photos: prac_photos
      });
     
    }
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }





	render() {

		return (
			<div className="App">
        <div className="application">
          <div className="title">
              <img className="banner" src={require('./charming_logo.png')} />
          </div> 
        <h3>Hand-crafted Charms by Gabrielle Bonny</h3>
        <Description/>
        <Navigation check={this.state.checkstring} onClick={this.checkTab()}/>
        
        <div className="gallery_style">
          <Gallery photos={this.state.photos} onClick={this.openLightbox} margin={8}/>
          <Lightbox images={this.state.photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}/>
        </div>

        </div>
			</div>
		);
	}
}

export default App;