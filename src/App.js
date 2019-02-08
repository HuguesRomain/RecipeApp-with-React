import React, { Component } from 'react'
// CSS
import './App.css'
import Header from './components/Header'
import recettes from './recettes'; 
import Admin from './components/Admin';

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  loadExample = () => this.setState({recettes})

  render () {
    return (
      <div className='box'>
       <Header pseudo={this.state.pseudo}></Header>
        <div className='cards'>
          <div className='card'>
            <h2>Une Carte</h2>
          </div>
        </div>
        <Admin
        loadExample={this.loadExample}></Admin>
      </div>
    )
  }
}

export default App
