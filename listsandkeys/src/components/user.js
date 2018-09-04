import React from 'react';

const user = (props) => {
  let age = props.age >=0 ? props.age: "NA";

  if(props.children) {
  return (
    <li>
      <span>name: {props.children} | profession={props.profession} | age={props.age}</span>
      <input onChange={props.changeEvent} value={props.children} />
      <button onClick={props.deleteEvent}>Delete</button>
    </li>
 )
} else {
  return (<li>Invalid Entry</li>)
 }
}

export default user;

//value={props.children} is a two way binding
