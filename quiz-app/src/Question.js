import React, {Component} from 'react'
import Answer from './Answer'

export default class Quiz extends Component {
  render(){
    let { answers, title }= {...this.props.data}
    return (
      <div>
        <h3>{title}</h3>
        {answers ? answers.map((answer, index) => <Answer key={index} data={answer} name={title}/>) : <p>Loading</p>}
      </div>
    )
  }
}
