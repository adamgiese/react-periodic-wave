import React from 'react';
import Overtone from './Overtone.jsx';

export default class Overtones extends React.Component {
  render() {
    const overtones = this.props.overtones.map(
      (tone, index) => {
        return <Overtone 
          tone={tone} 
          key={index}
          index={index}
          changeOvertone={(tone,index) => this.props.changeOvertone(tone,index)}
        />
      }
    );
    return (
      <div className='overtones-container'>
        <h2>Overtones</h2>
        <div className='overtones'>
          {overtones}
        </div>
        <button className='overtones--add' onClick={() => {this.props.addOvertone();}}>Add Overtone</button>
      </div>
    );
  }
}
