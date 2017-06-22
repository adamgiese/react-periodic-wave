import React from 'react';
import Overtones from './Overtones.jsx';
import Audio from './Audio.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Hola, mundo!',
      isPlaying: false,
      overtones: [1,.5,.1,1],
    }
  }

  handleAddOvertone() {
    this.setState({overtones: [...this.state.overtones,.5]});
  }

  handleOvertoneChange(tone,index) {
    let newOvertones = this.state.overtones.slice();
    newOvertones[index] = tone;
    this.setState({overtones: newOvertones});
  }

  render() {
    return (
      <div className='app'>
        <h1 className='app-title'>Periodic Wave</h1>
        <Overtones 
          overtones={this.state.overtones}
          addOvertone={() => {this.handleAddOvertone()}}
          changeOvertone={(tone,index) => {this.handleOvertoneChange(tone,index)}}
        />
        <Audio overtones={this.state.overtones} />
      </div>
    );
  }
}
