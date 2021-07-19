import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // ACTION ITEM: Add possible Magic8 Ball answers to the array
      answerArray: [
        "Here is an answer", 
        "It is Certain", 
        "It is decidedly so", 
        " Without a doubt"
      ],
      selectedAnswer: "",
      input: ""
    }
  }

  handleChange = (e) => {
    console.log(this.state)
    this.setState({
      input: e.target.value
    })
    console.log(e.target.value)
  }

  handleSubmit = () => {
    const { answerArray } = this.state
    // ACTION ITEM: Your code here!!
    // ACTION ITEM: Update the answerArray selection
    this.setState({ 
      selectedAnswer: 
        answerArray[Math.floor(Math.random()*4)] })
    }


  // trying to clear input box!!!!                             
  handleClear = () => {                  
    this.setState({
      input: ''
    }) 
    console.log(this.state) 
  }

  render(){
    return (
      <>
        <h1>Magic 8 Ball</h1>
        <input
          className="inputBox"
          type="text"
          onChange={ this.handleChange }
          value={ this.state.input }
        />
        <br />
        <button onClick={ this.handleSubmit }>
          Ask the Magic 8 Ball a Question
        </button>
        <p>{ this.state.selectedAnswer }</p>
        <button onClick={ this.handleClear }>
          clear
        </button>
      </>
    )
  }
}

export default App
