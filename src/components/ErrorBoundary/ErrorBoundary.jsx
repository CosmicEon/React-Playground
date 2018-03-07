import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    erroMassage: '',
  }

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, erroMassage: error });
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMassage}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
