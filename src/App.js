import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {updateUser} from './actions/usersActions';

class App extends Component {
  

  constructor(props) {
      super(props);

      this.onUpdateUser = this.onUpdateUser.bind(this);
  }  

  onUpdateUser() {
    this.props.onUpdateUser('sammy');
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.onUpdateUser}>
            update user
          </button>
          <p>{this.props.user}</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
   products: state.products,
   user: state.user,
});

const mapActionsToProps = {
  onUpdateUser: updateUser,
};

export default connect(mapStateToProps, mapActionsToProps) (App);
