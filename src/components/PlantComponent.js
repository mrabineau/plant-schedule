import React, { Component } from 'react';
import AllPlants from './AllPlants.js';

class PlantComponent extends Component {
  render() {
     const plant = this.props.plants.map((item, i) => {
      return <div>
                <img className="plantImage" src={item.image} />
                <h1>{item.name}</h1>
             </div>
            })
    return (
      <div>
        {plant}
      </div>
    )
  }
}

export default PlantComponent;
