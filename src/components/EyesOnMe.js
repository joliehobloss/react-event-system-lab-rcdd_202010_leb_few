// Code EyesOnMe Component Here
import React from 'react';
class EyesOnMe extends React.Component {
 
  focus = () => {
    console.log('Good!');
  }
  
  blur = () => {
<<<<<<< HEAD
    console.log('Hey! Eyes on me!');
=======
    console.log('Entering password...');
>>>>>>> fe33513cdedd8797dd8b2971c891a579350b3d9f
  }
 
  render() {
    return (
      <button onFocus={this.focus}
onBlur={this.blur} ></button>
    );
  }
}

export default EyesOnMe
