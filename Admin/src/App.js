import React, { Component } from 'react';
import { CountryDropdown } from 'react-country-region-selector';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      country: '',
      imageURL: '',
      items: [], 
      id: '',
    };
    this.getArtistsFromServer();

  }

  getArtistsFromServer() {
    fetch("http://127.0.0.1:3000/artists", {
      method: 'GET'
    }).then((respons) => {respons.json().then((artistArr) => this.setState({items: artistArr}))})
    .catch((err) => console.log(err.message));
  }
  

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }
  handleImageURLChange = (e) => {
    this.setState({imageURL: e.target.value});
  }


  submitForm = () => {
    if(this.state.name === '' || this.state.country === '') {
      alert("Vennligst fyll inn alle feltene!")
      return;
    }
    fetch("http://127.0.0.1:3000/artists", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name: this.state.name, country: this.state.country, imageURL: this.state.imageURL}),
    }).then((respons) => {respons.json().then((artistArr) => this.setState({items: artistArr}));})
    .catch((err) => console.log(err.message));
    this.setState({name: '', country: '', imageURL: ''})
  }

  selectCountry = (val) => {this.setState({country: val})}

  render() {
    return (
      <div className="main">
        <div className="section">
        <div className="sectionLeft">
          <div className="image" style={{backgroundImage: "url(" + this.state.imageURL + ")"}} />
        </div>
        <div className="sectionRight">
          <div className="artist">
            <p>Artist:</p>
            <input type="text" placeholder="Ola Nordmann"  value={this.state.name} onChange={this.handleNameChange} />
          </div>
          <div className="country">
            <p>Land:</p>
            <CountryDropdown className="countryDropdowns" value={this.state.country} onChange={(val) => this.selectCountry(val)} />
          </div >
          <div className="imageURL">
            <p>Bilde URL:</p>
            <input type="text" placeholder="www.minside.no/bilde.jpg"  value={this.state.imageURL} onChange={this.handleImageURLChange} />
          </div> 
          <button onClick={this.submitForm}>Legg til</button>
          </div> 
        </div>
          <ArtistList items={this.state.items}/>
      </div>
    );
  }
}

class ArtistList extends React.Component {
  render () {
    var listitems = this.props.items.map((item) => {
      return (
        <ArtistListItem key={item._id} item={item}   />
      );
    });
    return (
      <div>
      <div className="listLabels"> 
          <div className="listName">Navn</div>
          <div className="listCountry">Land</div>
          <div className="listButtons"></div>
        </div> 
      <div className="artistList"> {listitems} </div>
      </div>
    );
  }
}

class ArtistListItem extends React.Component {
  
  onClickClose() {
  }
  onClickEdit() {
  }
 
  render () {
    return(
        <div className="listItem" >
          <div className="listName">{this.props.item.name} </div>
          <div className="listCountry">{this.props.item.country} </div>
          <div className="listButtons">
            <button type="button" className="edit" onClick={this.onClickEdit}>Edit</button>
            <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
          </div>
        </div>
    );
  }
}




  


export default App;
