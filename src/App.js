import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './App.css';

class App extends Component {  
  render() {
    return (
	    <div className="App">

            <div className="App-header">
              <h2>Manifesto-as-a-Service</h2>
            </div>
	    
	    <Tabs>
	      <TabList>
	        <Tab>Live Demo</Tab>
	        <Tab>Pricing</Tab>
	        <Tab>About Us</Tab>
	      </TabList>

              <TabPanel>
  	        <h1>Live Demo</h1>
              </TabPanel>

	    <TabPanel>
	    <h1>Pricing</h1>
	    </TabPanel>

	    <TabPanel>
	    <h1>About Us</h1>
	    </TabPanel>
	    </Tabs>
	
	    <p className="App-footer">
   	      Please cite <a href="http://www.twitter.com/fffej">@fffej</a> in mentions
            </p>

	    </div>
    );
  }
}

export default App;
