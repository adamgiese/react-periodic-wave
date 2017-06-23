import React from 'react';

const notes = {
  C: 523.25,
  Cs: 554.37,
  Db: 554.37,
  D: 587.33,
  Ds: 622.25,
  Eb: 622.25,
  E: 659.25,
  F: 698.46,
  Fs: 739.99,
  Gb: 739.99,
  G: 783.99,
  Gs: 830.61,
  Ab: 830.61,
  A: 880.00,
  As: 932.33,
  Bb: 932.33,
  B: 987.77,
}

export default class Audio extends React.Component {
  componentDidMount() {
    this.pulse();
  }

  componentDidUpdate(prevProps, nextState) {
    if (this.props.isPlaying && !prevProps.isPlaying) {
      this.pulse();
    }
  }

  pulse() {
    if (this.props.isPlaying) {
      this.playWave();
      setTimeout(this.pulse.bind(this), 1000);
    }
  }

  playWave() {
    const myWave = audioContext.createPeriodicWave(
      new Float32Array([0,...this.props.overtones]),
      new Float32Array([0,...this.props.overtones].length),
    );
    const note = new Sound(audioContext);
    const now = audioContext.currentTime;
    note.play(this.props.pitch, now, 2000, myWave);
  }

  render() {
    return (
      <div>
      </div>
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
