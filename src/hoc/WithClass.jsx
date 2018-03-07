// eslint-disable-next-line
import React, { Component } from 'react';

// Higher Order Components

// a wrapper in the render()
const withClass = (props) => (
  <div className={props.className} >
    {props.children}
  </div >
);

// a wrapper as function, in export statement at end
// const withClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className} >
//       <WrappedComponent {...props} />
//     </div >
//   );
// };

// a wrapper as class, in export statement at end
// const withClass = (WrappedComponent, className) => {
//   return class extends Component {
//     render() {
//       return (
//         <div className={className} >
//           <WrappedComponent {...this.props} />
//         </div >
//       );
//     }
//   };
// };

export default withClass;
