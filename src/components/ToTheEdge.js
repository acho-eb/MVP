import React, { Component } from "react"
import ToTheEdge from '../audio/totheedge.mp3'

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
          <source src={ToTheEdge}></source>
        </audio>
      </div>
    )
  }
}