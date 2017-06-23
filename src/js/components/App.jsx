import React from 'react';
import Overtones from './Overtones.jsx';
import Audio from './Audio.jsx';
import Frequency from './Frequency.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Hola, mundo!',
      isPlaying: false,
      overtones: [1],
      pitch: 110,
    }
  }

  handleAddOvertone() {
    this.setState({overtones: [...this.state.overtones,0]});
  }

  handleFrequencyChange(pitch) {
    this.setState({pitch});
  }

  handleOvertoneChange(tone,index) {
    let newOvertones = this.state.overtones.slice();
    newOvertones[index] = tone;
    this.setState({overtones: newOvertones});
  }

  handlePlayChange() {
    this.setState({isPlaying: !this.state.isPlaying});
  }

  render() {
    const toggleText = this.state.isPlaying ? 'Pause': 'Play';
    return (
      <div className='app'>
        <h1 className='app-title'>Periodic Wave</h1>
        <Frequency pitch={this.state.pitch} changeFrequency={(pitch) => {this.handleFrequencyChange(pitch)}}/>
        <Overtones 
          overtones={this.state.overtones}
          addOvertone={() => {this.handleAddOvertone()}}
          changeOvertone={(tone,index) => {this.handleOvertoneChange(tone,index)}}
        />
        <Audio 
          overtones={this.state.overtones} 
          isPlaying={this.state.isPlaying}
          pitch={this.state.pitch}
        />
        <button onClick={this.handlePlayChange.bind(this)}>{ toggleText }</button>
      </div>
    );
  }
}
