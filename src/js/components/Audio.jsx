import React from 'react';

export default class Audio extends React.Component {

  render() {
    const myWave = audioContext.createPeriodicWave(
      new Float32Array([0,...this.props.overtones]),
      new Float32Array([0,...this.props.overtones].length),
    );

    return (
      <button onClick={() => {
        const note = new Sound(audioContext);
        const now = audioContext.currentTime;
        note.play(330, now, 4000, myWave);
      }}>Play</button>
    );
  }
}

class Sound { //edited from https://css-tricks.com/introduction-web-audio-api/#article-header-id-4
  constructor(context) {
    this.context = context;
  }

  init() {
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
  }

  play(value, time, duration=1, type='sine') {
    this.init();
    if (typeof type === 'string') {
      this.oscillator.type = type;
    } else {
      this.oscillator.setPeriodicWave(type);
      
    }
    this.oscillator.frequency.value = value;
    this.gainNode.gain.setValueAtTime(1, this.context.currentTime);
            
    this.oscillator.start(time);
    this.stop(time, duration);

  }

  stop(time, duration) {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, time + duration/1000);
    this.oscillator.stop(time + duration/1000);
  }
}

var audioContext = new (window.AudioContext || window.webkitAudioContext)();
