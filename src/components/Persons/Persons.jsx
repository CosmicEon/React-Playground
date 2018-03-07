import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);

    console.log('[CREATE Persons.js] Inside constructor', props);
  }

  componentWillMount() {
    console.log('[CREATE Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[CREATE Persons.js] Inside componentDidMount()', this.props);
  }

  render() {
    console.log('[CREATE Persons.js] Inside render()');

    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          position={index}
          deletePerson={() => this.props.delete(index)}
          changeName={(event) => this.props.change(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
