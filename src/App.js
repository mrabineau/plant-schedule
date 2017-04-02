import React, { Component } from 'react';
import AllPlants from './components/AllPlants.js';
import './App.css';


var PLANTS = [
  {name:"Money Tree", scheduled:"bi-weekly", location:"indoor", watered:"true", image:"https://www.easternleaf.com/v/vspfiles/photos/800740-03-2T.jpg", value:"" },
  {name:"Moringa Tree", scheduled:"weekly", location:"indoor", watered:"false", image:"http://www.moringamatters.com/My_first_moringa_tree.jpg", value:"" },
  {name:"Venus Fly Trap", scheduled:"daily", location:"outdoor", watered:"false", image:"https://www.flytrapcare.com/wp-content/uploads/2014/03/andycpuk_holland_red1_large-400x311.jpg", value:"" },
  {name:"Feicheng Tao Peach Tree", scheduled:"daily", location:"outdoor", watered:"true", image:"https://photos.smugmug.com/Ag-Horticulture/Fruit-Trees/Peaches/Peachy-Keen-Peach/i-SWC4FWX/1/M/20140703-_DSD8426-M.jpg", value:"" },
  {name:"Guava Strawberry Tree", scheduled:"daily", location:"outdoor", watered:"false", image:"http://www.onlineplants.com.au/shopping-cart/image/cache/data/psidium%20strawberry%20guava1-500x500.jpg", value:"" },
  {name:"Little Cactus", scheduled:"monthly", location:"indoor", watered:"true", image:"https://thumbs.dreamstime.com/x/little-cactus-plant-21225371.jpg", value:"" },
  {name:"Ficus", scheduled:"weekly", location:"indoor", watered:"false", image:"https://maxpull-gdvuch3veo.netdna-ssl.com/wp-content/uploads/2012/02/ficus1-681x1024.jpg", value:"" },
  {name:"Aloe Vera", scheduled:"bi-weekly", location:"indoor", watered:"true", image:"http://www.ikea.com/us/en/images/products/aloe-vera-potted-plant__0173210_PE327299_S4.JPG", value:"" }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <AllPlants plants={PLANTS}/>
      </div>
    );
  }
}

export default App;
