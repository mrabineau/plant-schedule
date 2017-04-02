import React, { Component } from 'react';

class AllPlants extends Component {
  render(){
    const plant = this.props.plants.map((item, i) => {
      return <div>
                <h1>{item.name}</h1>
                <img className="plantImage" src={item.image} />
             </div>
    })
    return(
      <div>
        {plant}
      </div>
    );
  }
}

export default AllPlants;
