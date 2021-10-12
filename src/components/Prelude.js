import React, { Component } from "react"
import Prelude from '../audio/prelude.mp3'

export default class extends Component {
  componentDidMount() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.volume=0.1;
    audioEl.play()
  }

  render() {
    return (
      <div>
        <audio className="audio-element">
          <source src={Prelude}></source>
        </audio>
      </div>
    )
  }
}