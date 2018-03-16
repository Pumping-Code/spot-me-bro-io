import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bro: 'Bro'
    };
    this.bros = [
      'Bro',
      'Bromosapien',
      'Bro Montana',
      'Broseph Stalin',
      'Bromosaurus',
      'Broba Fett',
      'Brofessor',
      'Brogue One',
      'Brohemian Rhapbrody',
      'Brona Lisa',
      'Brodo Baggins',
      'Bronan the Barbarian',
      'Brostradamus',
    ];
    this.newBro = this.newBro.bind(this);
  }

  componentDidMount() {
    this.newBro()
  }

  newBro() {
    setInterval(() => {
      const index = Math.floor(Math.random() * this.bros.length);
      const newBro = this.bros[index];
      this.setState({ bro: newBro });
    }, 2000);
  }

  render() {
    return (
      <div className="appContainer">
        <h1>Spot Me {this.state.bro}</h1>
      </div>
    )
  }
}

export default Home;
