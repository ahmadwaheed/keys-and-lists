import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/user';
import UniqueID from 'react-html-id';

const Temp = () => {
  return (
//This part covers how to build fragments in React
  <Fragment>
    <div>Hi</div>
    <div>Hello</div>
  </Fragment>
  )
}

class App extends Component {

//In order to use UniqueID we have to use constructor
constructor() {
  super();
  UniqueID.enableUniqueIds(this); //This function we use on unique keys
  this.state = {
      users: [
      //id will make every element unique
      {id: this.nextUniqueId(), name: 'john', age: 20, profession: 'marketing'},
      {id: this.nextUniqueId(), name: 'jill', age: 21, profession: 'HR'},
      {id: this.nextUniqueId(), name: 'jull', age: 22, profession: 'CS'},
      {id: this.nextUniqueId(), name: 'jutt', age: 23, profession: 'Hardware'}
    ]
  };
  console.log(this.state);
}

deleteUser = (index, e) => {
  //state cannot be mutated if we need to delete anything from the state
  //so we need to make a copy of the state

  //this will take in an empty array and put that array in to that array
  const users = Object.assign([], this.state.users);

  //we are grabbing that array and using splice() on it to delete
  // and take in the index to delete
  users.splice(index, 1);

  //this will set the state and send this new array back to users
  this.setState({
      users: users
  });
}

changeUserName = (id, event) => {
  //thats how we can match the id we are going to look for
  if(event.target.value.length === 0) {
    return;
  }
  const index = this.state.users.findIndex((user) => {
      return (user.id === id);
    })

//we need to make a copy of the object and pass the copy instead of original
    const user = Object.assign({}, this.state.users[index]);

//Now we need to make the input equal to the value of user
user.name = event.target.value;

const users = Object.assign([], this.state.users);
users[index] = user;

this.setState({
  users: users
 });
}

  render() {
    return (
      <div>
        <Temp />
        <ul>
          {
            this.state.users.map((user, index) => {
            return (<div><User
                         age={user.age}
                         key={user.id}
                         changeEvent={this.changeUserName.bind(this,user.id)}
                         deleteEvent={this.deleteUser.bind(this, index)}>
                         {user.name}
                         {user.profession}</User></div>)
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;

//user.age is property
//user.name is value
