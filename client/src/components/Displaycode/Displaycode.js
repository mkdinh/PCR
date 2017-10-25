//display space for the preview of components
//uses react-tabs to create a small component with clickable tabs
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Draggable, Droppable } from 'react-drag-and-drop';
import Listcompo from "../../components/Listcompo";
//import ListBody from "../../components/Body";
import group from "../../group.json";
//import Canvas from "../Canvaspage";
import "./Displaycode.css";

/*

psuedo code:  need to grab the component object from the database and then
parse it out to other spaces;  each of the tabs below need to take a different
key value pair from the compo's props {components.html}{component.css} etc.  and divvy
the, up per tab (so maybe the name/)

<Listcompo components= {this.props.html} />
updateDisplay=(data)=>{
  this.state({components: props.components
  });
}

https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/update/component_will_receive_props.html

*/


class Previewdisplay extends Component{


  clickTime(){

    console.log("This click worked");
  }



render(){
<div>
const newCompo ={this.state.active};
</div>

	return(


<Tabs className="Tabs">
    <TabList>
      <Tab>HTML</Tab>
      <Tab>CSS</Tab>
      <Tab>Styling Preview</Tab>
    </TabList>
     <TabPanel>
      <h2>Preview Your HTML for your Component</h2>
        <p> Name: {this.props.newCompo.name}</p>
            
    </TabPanel>
    <TabPanel>
      <h2>Preview Your CSS for your Component</h2>
        <button onClick={()=>this.clickTime()} >Click me</button>
    </TabPanel>
       <TabPanel>
      <h2>Preview Your Styling for your Component</h2>
          <button onClick={()=>this.clickTime()}>Click me</button>
    </TabPanel>
  </Tabs>
	);

	}


}


export default Previewdisplay;


