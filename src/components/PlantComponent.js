import React, { Component } from 'react';

class PlantComponent extends Component {
  constructor(props){
    super(props);
  }

  render(){

      const names = ["Mel", "Veronica", "Jesse", "Will", "Matt"]
      const listItems = names.map((name) =>
            <option key={name.index}>
              {name}
            </option>
        )
    return(
      <div>
        <select>
            {listItems}
        </select>
      </div>
      )
    }

 }

export default PlantComponent;
