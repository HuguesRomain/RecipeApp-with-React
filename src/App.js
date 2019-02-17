import React, { Component } from 'react'
// CSS
import './App.css'
import Header from './components/Header'
import recettes from './recettes'; 
import Admin from './components/Admin';
import Card from './components/Card'
//firebase 
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  componentDidMount(){
    base.syncState(`/${this.state.pseudo}/recettes`, {
      constext: this, 
      state: 'recettes' 
    })
}


  loadExample = () => this.setState({recettes})

  render () {
    const cards = Object.keys(this.state.recettes)
    .map(key => <Card key={key} details={this.state.recettes[key]}></Card>)
    return (
      <div className='box'>
       <Header pseudo={this.state.pseudo}></Header>
        <div className='cards'>
          {cards}
        </div>
        <Admin
        loadExample={this.loadExample}></Admin>
      </div>
    )
  }
}

export default App
