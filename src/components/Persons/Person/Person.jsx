import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Person.css';
import withClass from '../../../hoc/WithClass';

class Person extends PureComponent {
  constructor(props) {
    super(props);

    console.log('[CREATE Person.js] Inside constructor', props);
  }

  // Creational Lifecycle hooks
  componentWillMount() {
    console.log('[CREATE Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[CREATE Person.js] Inside componentDidMount()', this.props);
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  // Component Update Lifecycle hooks
  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Person.js] Inside componentWillReceiveProps()', nextProps);
  }

  // React PureComponent contains in itself shouldComponentUpdate()
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Person.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons ||
  //     nextProps.changeName !== this.props.changeName ||
  //     nextProps.deletePerson !== this.props.deletePerson; // checks if they are different objects
  //   // and deleting people is made by changing different object, those have different reference in memory
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Person.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Person.js] Inside componentDidUpdate()');
  }

  render() {
    console.log('[CREATE Person.js] Inside render()');

    return (
      <withClass className="Person">
        <div className="person-desc">
          <p>I'm {this.props.name} and I am {this.props.age} years old!</p>
          <button onClick={this.props.deletePerson}>delete</button>
        </div>

        <p>{this.props.children}</p>

        <input
          ref={(input) => { this.inputElement = input; }}
          type="text"
          onChange={this.props.changeName}
          value={this.props.name} />
      </withClass>
    );
    // return [
    //   <div key="1" className="person-desc"><p>I'm {this.props.name} and I am {this.props.age} years old!</p><button onClick={this.props.deletePerson}>delete</button></div>,
    //   <p key="2">{this.props.children}</p>,
    //   <input key="3" type="text" onChange={this.props.changeName} value={this.props.name} />,
    // ];
  }
}

Person.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  position: PropTypes.number,
  deletePerson: PropTypes.func,
  changeName: PropTypes.func,
};

export default Person;

// stateless component
// const person = (props) => {
//   // Radium library enables this styling
//   // const personStyle = {
//   //   '@media (min-width: 500px)': {
//   //     width: '450px'
//   //   }
//   // }

//   // const rnd = Math.random();
//   // if (rnd > 0.8) {
//   //   throw new Error('Something went wrong');
//   // }

//   return (
//     <div className="Person">
//       <div className="person-desc">
//         <p>I'm {props.name} and I am {props.age} years old!</p>
//         <button onClick={props.deletePerson}>delete</button>
//       </div>

//       <p>{props.children}</p>

//       <input type="text" onChange={props.changeName} value={props.name} />
//     </div>
//   );
// };
// export default person;
