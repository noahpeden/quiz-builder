import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Quiz from './Quiz'

class App extends Component {
  constructor(){
    super()
    this.state = {
      quizzes: null,
      scoreObj: {},
      total: 0,
      message: null
    }
  }
  componentDidMount(){
    axios
    .get('/quizzes')
    .then((response) => {
      this.setState({
        quizzes: response.data.quizzes
      })
    })
  }

  setScore(id, score){
    let total = this.state.scoreObj
    Object.assign(total, {[id]: score})
    this.setState({
      scoreObj: total
    })
  }

  sendScore(){
    axios
    .post('/scores', {score: this.state.total})
    .then((response) => {
      this.setState({
        message: response.data.score
      })
    })
  }

  submit(){
    let total = this.state.scoreObj
    let scoreState = Object.keys(total).reduce((obj, eachNumber)=> {
      return obj + total[eachNumber]
    }, 0)
    this.setState({
      total: scoreState
    })
    this.sendScore()
  }

  render() {
    let quizzes = this.state.quizzes
    return (
      <div className="App">
        {quizzes ? quizzes.map(quiz => <Quiz data={quiz} key={quiz.id} setScore={this.setScore.bind(this)}/>): <p>...</p>}
        <button onClick={() => this.submit()}>Submit</button>
        {this.state.total}
        <div>{this.state.message}</div>
    </div>
    );
  }
}

export default App;
