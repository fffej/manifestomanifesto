import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './App.css';
import banner from './banner.png';
import BuildManifestoForm from './BuildManifestoForm.js';

class App extends Component {  
    render() {

	document.title="Manifesto as a Service";
	
      return (
	      <div className="App"> 

              <div className="App-header">
              <img src={banner} class="App-banner" alt="Banner logo" />
              </div>
  
	      <div>
              <h1>Manifesto-as-a-Service</h1>

	      <p><b>Every</b> successful movement these days needs a manifesto. <b>Manifesto-as-a-Service</b> is built to empower change agents, money makers and training partners to create a successful manifesto-based ecosystem.</p>.

	      <p>Fill in the details below to generate the necessary details to launch your movement.</p>
	  
	      <div className="App-form">
	      <BuildManifestoForm />
	      </div>

	      </div>

	      <p className="App-footer">Please cite <a href="https://www.twitter.com/fffej">@fffej</a> in mentions.</p>
	      </div>
    );
  }
}

export default App;
