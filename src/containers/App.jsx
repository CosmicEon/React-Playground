import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import PersonsHeader from '../components/PersonsHeader/PersonsHeader';
import withClass from '../hoc/WithClass';

class App extends Component {
  constructor(props) {
    super(props);

    console.log('[CREATE App.js] Inside constructor', props);

    // older way to initialize state
    // works in most setups
    this.state = {
      persons: [
        { id: 0, name: 'Krasi', age: 28 },
        { id: 1, name: 'Rae', age: 36 },
        { id: 2, name: 'Marcus', age: 23 },
        { id: 3, name: 'Delores', age: 27 },
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0,
    };
  }

  // newer way to initialize state
  // works in newer setups
  // state = {
  //   persons: [
  //     { id: 0, name: 'Krasi', age: 28 },
  //     { id: 1, name: 'Rae', age: 36 },
  //     { id: 2, name: 'Marcus', age: 23 },
  //     { id: 3, name: 'Delores', age: 27 },
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false,
  // }

  componentWillMount() {
    console.log('[CREATE App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[CREATE App.js] Inside componentDidMount()', this.props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
    return nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons; // checks if they are different objects
    // and deleting people is made by changing different object, those have different reference in memory
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate()');
  }

  // Rename selected person
  renamePersonHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    // create copy of persons array
    // const person = Object.assign({}, this.state.persons[personIndex]); // older approach
    const personToUpdate = { ...this.state.persons[personIndex] }; // ES6 approach
    personToUpdate.name = event.target.value;

    // get copy from persons, and work with that
    const persons = [...this.state.persons];
    persons[personIndex] = personToUpdate;

    this.setState({ persons: persons });
  }

  // Delete selected person
  deletePersonHandler = (personIndex) => {
    // It is good practice to create a copy of the object that will manipulate
    // and work with it's copy, and then apply tho copy as result.
    // Because we use the original object, and this changes it globally,
    // and using a copy doesn't effect the original.

    // const persons = this.state.persons.slice(); // old approach
    const persons = [...this.state.persons]; // ES6 approach

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  // Toggle People's list
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    // takes the previous state and then applies the new one
    // this is a newer approach
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1,
      }
    });
  }

  render() {
    console.log('[CREATE App.js] Inside render()');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          change={this.renamePersonHandler}
          delete={this.deletePersonHandler}
        />
      );
    }

    return (
      <withClass className="App">
        <button onClick={() => { this.setState({ showPersons: true }); }}>Show Persons</button>

        <PersonsHeader
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggle={this.togglePersonsHandler}
        />

        {persons}
      </withClass>
    );

    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
