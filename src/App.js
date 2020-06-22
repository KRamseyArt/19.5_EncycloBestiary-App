import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import './App.css';
import Config from './Config';
import Context from './Context';

import Hero from './Components/Hero/Hero';
import NavBar from './Components/Content/NavBar/NavBar';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';

export class App extends React.Component{
  state = {
    bestiaries: [],
    data: []
  }

  /*
  componentDidMount(){
    const ENDPOINT = Config.API_ENDPOINT;
    Promise.all([
      fetch(`${ENDPOINT}/api/data`),
      fetch(`${ENDPOINT}/api/bestiaries`)
    ])
      .then(([dataRes, bestiaryRes]) => {
        console.log([dataRes, bestiaryRes])
        if(!dataRes.ok)
          return dataRes.json().then(e => Promise.reject(e));
        if(!bestiaryRes.ok)
          return bestiaryRes.json().then(e => Promise.reject(e))
        
        return Promise.all([dataRes.json(), bestiaryRes.json()]);
      })
      .then(([data, bestiaries]) => {
        this.setState({data, bestiaries});
      })
      .catch(error => {
        console.error({error});
      })
  }
  */

  addBestiary = (bestiary) => {
    this.setState({
      bestiaries: [...this.state.bestiaries, bestiary]
    })
  }

  addData = (data) => {
    this.setState({
      data: [...this.state.data, data]
    })
  }

  deleteData = (dataId) => {
    this.setState({
      data: this.state.data.filter(d =>
        d.id !== dataId)
    })
  }
  
  render(){
    const state = this.state;
    
    const contextValue = {
      bestiaries: state.bestiaries,
      data: state.data,
      addBestiary: this.addBestiary,
      deleteBestiary: this.deleteBestiary,
      addData: this.addData,
      deleteData: this.deleteData
    }
    return (
      <Context.Provider
        value={contextValue}
      >
        <div className="App">
          <Hero />
          
          <BrowserRouter>
            <Content />
          </BrowserRouter>

          <Footer />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
