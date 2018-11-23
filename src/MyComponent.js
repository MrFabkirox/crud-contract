import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string.isRequired,
    onClicked: PropTypes.func,
    title: PropTypes.string.isRequired
}

const defaultProps = {
    name: 'default props name'
}

class MyComponent extends Component {

    // place for ajax request so object receive data before component mount
    componentWillMount() {
        console.log('will mount')
    }

    // to focus a field after a component load
    componentDidMount() {
        console.log('did mount')
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(this.props, this.state, nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props, this.state, prevProps, prevState)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true; // false to not update
    }

    render() {
        const { title, name, onClick } = this.props;

        return (

            <div className="component">

              <h1>title from embeded component props: {this.props.title}</h1>
              <h2>Name: { name }</h2>
              <div onClick={onClick}>Click me</div>

            </div>

        )
    }
}

MyComponent.propTypes = propTypes
MyComponent.defaultProps = defaultProps

export default MyComponent
