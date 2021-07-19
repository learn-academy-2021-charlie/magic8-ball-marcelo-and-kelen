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
      selectedAnswer: [],
      input: "",
      questions: []
    }
  }

  handleSubmit = () => {
    const { answerArray } = this.state
    // ACTION ITEM: Your code here!!
    // ACTION ITEM: Update the answerArray selection
    this.setState({ 
      selectedAnswer: 
        [...this.state.selectedAnswer, answerArray[Math.floor(Math.random()*4)]],
      questions: [...this.state.questions, this.state.input]
    })
  }

  handleChange = (e) => {
    console.log(this.state)
    this.setState({
      input: e.target.value
    })
    console.log(e.target.value)
  }

  // trying to clear input box!!!!                             
  handleClear = () => {                  
    this.setState({
      input: ''
    }) 
    console.log(this.state) 
  }

  handleListClear = () => {                  
    this.setState({
      selectedAnswer: [], questions: []
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
          { this.state.questions.map((item) => {
            return <p key={item}>{item}?</p>
          }) }
          { this.state.selectedAnswer.map((item) => {
          return <p key={Math.random()}>{item}</p>
        })}
        <button onClick={ this.handleClear }>
          clear
        </button>
        <button onClick={ this.handleListClear }>
          clear list
        </button>
      </>
    )
  }
}

export default App
