import React from 'react';
import './PersonsHeader.css';
import Shell from '../../hoc/Shell';

const personsHeader = (props) => {
  const assignedClasses = [];
  const btnStyle = {
    padding: '10px 15px',
    border: '1px solid black',
    backgroundColor: 'green',
    color: 'white',
    cursor: 'pointer',
  };
  let btnClass = '';

  if (props.showPersons) {
    btnStyle.backgroundColor = 'red'; // this is how to change style dynamically
    btnClass = 'red'; // this has no effect, but show how to add class
  }

  if (props.persons.length <= 3) {
    assignedClasses.push('red'); // assignedClasses = ['red']
  }
  if (props.persons.length <= 2) {
    assignedClasses.push('bold'); // assignedClasses = ['red', 'bold']
  }

  return (
    <Shell>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        style={btnStyle}
        className={btnClass}
        onClick={props.toggle}>Toggle Persons
      </button>
    </Shell>
  );
};

export default personsHeader;
