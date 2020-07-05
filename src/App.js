import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import './App.css';

import Hero from './Components/Hero/Hero';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';

export class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Hero />
        
        <BrowserRouter>
          <Content />
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default App;
