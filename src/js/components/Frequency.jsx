import React from 'react';

export default class Frequency extends React.Component {
  handleChange(event) {
    this.props.changeFrequency(event.target.value);
  }
  render() {
    return (
      <div className='pitch'>
        <h2>Fundamental Frequency</h2>
        <input type='range' 
          className='pitch--input'
          min='16.35' 
          max='1046.5'
          step='.01' 
          defaultValue={this.props.pitch} 
          onChange={this.handleChange.bind(this)}
        />
        <p className='pitch--label'>{this.props.pitch}</p>
      </div>
    );
  }
}
