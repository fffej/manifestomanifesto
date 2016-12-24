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

	      <div className="App-form">
	      <BuildManifestoForm />
	      </div>
	  
	      <div>
              <h1>Manifesto-as-a-Service</h1>
              <p>If you are interested in providing seed capital to allow us to complete our vision, please contact our <a href="mailto:jeff@manifestomanifesto.org">CEO</a> to discuss terms.</p>
	      </div>

	      <p className="App-footer">Please cite <a href="https://www.twitter.com/fffej">@fffej</a> in mentions.</p>
	      </div>
    );
  }
}

export default App;
