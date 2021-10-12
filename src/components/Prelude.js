import React from "react"
import audio from '../audio/prelude.mp3'

class Prelude extends React.Component {
  componentDidMount() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.volume=0.1;
    audioEl.play()
  }

  render() {
    return (
      <div>
        <audio className="audio-element">
          <source src={audio}></source>
        </audio>
      </div>
    )
  }
}

export default Prelude;