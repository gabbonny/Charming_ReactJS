import React, { Component } from 'react';
import Navigation from './Navigation';
//import Gallery from 'react-photo-gallery';
import Photos from './Photos';
import Lightbox from 'react-images';

// function arrayMoveImmutable(array, previousIndex, newIndex) {
//   var length = array.length;
//   var newLength = newIndex >= length ? newIndex + 1 : length;
//   var newArray = new Array(newLength);
//   var element = array[previousIndex];

//   for (var i = 0, j = 0; i < newLength; i++) {
//     if (i === newIndex) {
//       newArray[i] = element;
//     } else {
//       if (j === previousIndex) {
//         j++;
//       }

//       if (j < length) {
//         newArray[i] = array[j++];
//       } else {
//         newArray[i] = undefined;
//       }
//     }
//   }

//   return newArray;
// }



//USED BY GALLERY APP
// export function arrayMove(arr, previousIndex, newIndex) {
//   const array = arr.slice(0);
//   if (newIndex >= array.length) {
//     let k = newIndex - array.length;
//     while (k-- + 1) {
//       array.push(undefined);
//     }
//   }
//   array.splice(newIndex, 0, array.splice(previousIndex, 1)[0]);
//   return array;
// }


class Gallery extends Component {





	render(){
		return (
			<div className="gallery-block">
				<Photos/>
			</div>
		);
	}
}

export default Gallery;