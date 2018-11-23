import React, { Component } from 'react';
import MyComponent from './MyComponent'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    // bounding method of component onSubmit to onSubmit in window
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      title: 'initial App title'
    }
    this.onClick = this.onClick.bind(this)
  }
  
  onClick() {
    alert('clicked')
    this.setState({
      title: 'New app title'
    })
  }

  onChange(event) {
    console.log(event.target.value)
  }

  onSubmit(event) {
    // prevent form refreshing
    event.preventDefault();

    alert(this.input.value)
  }

  render() {
    const title = 'title variable'
    const title2 = 'title2'

    const list = [
      'item1',
      'item2',
      'item3'
    ]

    return (
      <div className="App">

        <h1>crud contract { true? title : title2 } </h1>

        <h1>Onclick:<br />
          {
            list.map(item => {
              return(
                <div key={item} onClick={this.onClick}>{item}</div>
              )
            })
          }
        </h1>

        <form onChange={this.onChange} >
          <input onChange={this.onChange} 
          />
        </form>

        <form onSubmit={this.onSubmit} >
          <input onChange={this.onChange} 
            ref={input => this.input = input}
          />
        </form>

        <h1>{this.state.title}</h1>
        <div onClick={this.onClick}>click here to change title state</div>

        <div>
          <MyComponent 
            title={this.state.title}
            name='name set in the embeded component'
            onClick={this.onClick}
          />
        </div>

      </div>

    );
  }
}

export default App;
