import React from 'react';
import '../App.css';
import axios from 'axios';
import background from '../images/select.png';
import Twilight from './Twilight';

class Creation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      server: 'Cactuar',
      avatar: '',
      exists: false,
      searched: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios({
      method: 'get',
      url: `https://staging.xivapi.com/character/search?name=${this.state.firstName}+${this.state.lastName}&server=${this.state.server}`
    })
      .then((response) => {
        console.log(response.data.Results[0])
        if (response.data.Results[0]) {
          this.setState({
            avatar: response.data.Results[0].Avatar,
            exists: true,
            searched: true
          })
        } else {
          this.setState({
            exists: false,
            searched: true
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    var searched = this.state.searched
    var exists = this.state.exists
    return (
      <div className='creation' style={{ backgroundImage: `url(${background})` }}>

        {!exists && searched ? null :
          <div className='creation-start'>
            Check if your preferred name and server are available
          </div>}

        {searched ? null :
          <div className='creation-name'>
            Please choose a first and last name that are between 2 and 15 characters each, with a combined maximum of 20 characters
          </div>}

        {searched ? null :
          <div className='creation-server'>
            The available servers for selection are from the North American Data Center
          </div>}

        {exists && searched ?
          <div className='creation-exists'> This Warrior of Light already exists <img src={this.state.avatar} alt='avatar of character' /> </div>
          : null}

        {!exists && searched ?
          <div className='creation-congratulations'> Congratulations! {this.state.firstName} {this.state.lastName} is available for use in {this.state.server} </div>
          : null}

        <form onSubmit={this.handleSubmit} className='creation-form'>
          <label className='creation-first'>
            First Name:
            <input
              name='firstName'
              type='text'
              maxLength='15'
              autoComplete='off'
              value={this.state.value}
              onChange={this.handleInputChange} />
          </label>

          <br />

          <label className='creation-last'>
            Last Name:
            <input
              name='lastName'
              type='text'
              maxLength='15'
              autoComplete='off'
              value={this.state.value}
              onChange={this.handleInputChange} />
          </label>

          <label className='creation-select'>
            Server:
            <select
              name='server'
              value={this.state.server}
              onChange={this.handleInputChange} >

              <option value='Adamantoise'>Adamantoise</option>
              <option value='Cactuar'>Cactuar</option>
              <option value='Faerie'>Faerie</option>
              <option value='Gilgamesh'>Gilgamesh</option>
              <option value='Jenova'>Jenova</option>
              <option value='Midgardsormr'>Midgardsormr</option>
              <option value='Sargatanas'>Sargatanas</option>
              <option value='Siren'>Siren</option>

              <option value='Behemoth'>Behemoth</option>
              <option value='Excalibur'>Excalibur</option>
              <option value='Exodus'>Exodus</option>
              <option value='Famfrit'>Famfrit</option>
              <option value='Hyperion'>Hyperion</option>
              <option value='Lamia'>Lamia</option>
              <option value='Leviathan'>Leviathan</option>
              <option value='Ultros'>Ultros</option>

              <option value='Balmung'>Balmung</option>
              <option value='Brynhildr'>Brynhildr</option>
              <option value='Coeurl'>Coeurl</option>
              <option value='Diabolos'>Diabolos</option>
              <option value='Goblin'>Goblin</option>
              <option value='Malboro'>Malboro</option>
              <option value='Mateus'>Mateus</option>
              <option value='Zalera'>Zalera</option>

            </select>
          </label>
          <input className='creation-input' type='submit' value='Submit' />
        </form>

        <div className='creation-audio'>
          <Twilight />
        </div>

      </div>
    )
  }
}



export default Creation;
