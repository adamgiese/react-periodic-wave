import React from 'react';

export default class Overtone extends React.Component {
  handleChange(event) {
    this.props.changeOvertone(event.target.value, this.props.index);
  }
  render() {
    return (
      <div className='overtone'>
        <input type='range' 
          className='overtone--input'
          min='0' 
          max='1' 
          step='.01' 
          defaultValue={this.props.tone} 
          onChange={this.handleChange.bind(this)}
        />
        <p className='overtone--label'>{this.props.tone} | {this.props.index + 1}</p>
      </div>
    );
  }
}
