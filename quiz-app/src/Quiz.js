import React, {Component} from 'react'
import Question from './Question'

export default class Quiz extends Component {
  render(){
  let { questions, title }= {...this.props.data}
  return (
    <div>
      <h1>{title}</h1>
      {questions ? questions.map(question => <Question key={question.id} data={question} total={this.props.total} setScore={this.props.setScore}/>) : <p>Loading</p>}
    </div>
  )
}
}
