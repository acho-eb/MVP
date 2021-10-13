import React from "react"
import audio from '../audio/stormblood.mp3'

class Stormblood extends React.Component {
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

export default Stormblood;