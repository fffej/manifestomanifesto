import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './App.css';
import banner from './banner.png';

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

	      <p>We're developing better ways of developing manifestos by automating the process of writing and generating manifestos. By creating a manifesto using our service, we believe you can create and drive new certification industries and pulpits to preach from.</p>

<ul>
<li>Whilst there is value in being able to do, we find there is more value in being able to talk.</li>
<li>Whilst there is value in being able to talk there is more value in pontification.</li>
<li>Whilst there is value in pontification, there is more value in giving it a catchy name.</li>
<li>Whilst there is value in a catchy name, there is more value in marketing the book.</li>
<li>Whilst there is value in the book there is greater value in the consulting business around the book.</li>
<li>Whilst there is value in the consulting business there is more value in a pyramid certification scheme.</li>
<li>Whilst there is value in the pyramid certification scheme there is more value in licensed competitive franchises.</li>
</ul>

            <p>If you are interested in providing seed capital to allow us to complete our vision, please contact our <a href="mailto:jeff@manifestomanifesto.org">CEO</a> to discuss terms.</p>

	    </div>

	    <p className="App-footer">Please cite <a href="https://www.twitter.com/fffej">@fffej</a> in mentions.</p>
</div>
    );
  }
}

export default App;
