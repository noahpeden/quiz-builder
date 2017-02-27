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
      total: 0,
      message: ''
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
  setScore(score){
    let total = this.state.total
    this.setState({
      total: total += score
    })
    console.log('boom');
  }

  sendScore(){
    axios
    .post('/scores', {
      score: this.state.total
    })
    .then((response) => {
      this.setState({
        message: response.data.score
      })
    })
  }

  render() {
    let quizzes = this.state.quizzes
    return (
      <div className="App">
        {quizzes ? quizzes.map(quiz => <Quiz data={quiz} key={quiz.id} total={this.state.total} setScore={this.setScore.bind(this)}/>): <p>...</p>}
        <button onClick={this.sendScore()}>Submit</button>

    </div>
    );
  }
}

export default App;
