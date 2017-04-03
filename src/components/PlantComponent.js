import React, { Component } from 'react';
import { Link } from 'react-router'

class PlantComponent extends Component {
    constructor(props){
      super(props)

    }
  render(){
    const plantInfo = this.props.plants.map((item, index) => {
      return <div key={item.index}>
                <ul>
                  <li> Needs Water: {item.scheduled}</li>
                  <li> Location: {item.location} </li>
                </ul>
             </div>
          })

    return (
      <div>
        {plantInfo}
      </div>
    )
  }
}

export default PlantComponent;
