import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      isPhonevalid: false,
      isEmailValid: false,
      emailmsg: '',
      phonemsg: ''
    }
  }

  checkphone(value) {
    this.setState({ phone: value });
    var regphone = /^\d{10}$/;
    if (regphone.test(value)) {
      this.setState({
        phonemsg: '',
        isPhonevalid: true
      });
      console.log("right");
    }
    else {
      this.setState({
        phonemsg: 'Invalid phone no, should be 10 digits! \n',
        isPhonevalid: false
      });
    }
  }

  checkEmail(value) {
    this.setState({ email: value });
    var regemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regemail.test(value)) {
      this.setState({
        emailmsg: '',
        isEmailValid: true
      });
      console.log("right");
    }
    else {
      this.setState({
        emailmsg: 'Invalid email address! ',
        isEmailValid: false
      });
    }

  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.state.isEmailValid && this.state.isPhonevalid) {
      // alert("Form submitted successfully!");
      console.log(this.state);
      fetch('http://localhost/codeIgniter/index.php/ReactForm/saveFormdata', {
        method: 'POST',
        body: JSON.stringify({
          name: this.state.name,
          number: this.state.phone,
          email: this.state.email,
          address: this.state.address,
          city: this.state.city
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(response => {
        if (response.status === 200) {
          alert("Form Data saved successfully!");
        }
      }).catch(error => {
        alert("Form data could not be saved!");
      })
    }
    else {
      alert("Please fill the required details \n" + this.state.phonemsg + this.state.emailmsg);
    }
  }

  render() {
    return (
      <div className="App">
        <p>Register Here!</p>
        <div>
          <form action="#">
            <label>Name</label>
            <input type="text" id="name" name="name" placeholder="Your name.."
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />

            <label>Number</label>
            <textarea id="number" name="phonenumber" placeholder="Your number.."
              value={this.state.phone}
              onChange={e => this.checkphone(e.target.value)}
            ></textarea>

            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Your email"
              value={this.state.email}
              onChange={e => this.checkEmail(e.target.value)}
            />

            <label>Address</label>
            <textarea id="address" name="Address" placeholder="Enter your address here.."
              value={this.state.address}
              onChange={e => this.setState({ address: e.target.value })}
            ></textarea>

            <label>City</label>
            <input type="text" id="city" name="CityName" placeholder="Enter City here.."
              value={this.state.city}
              onChange={e => this.setState({ city: e.target.value })}
            />

            <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}