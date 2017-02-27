import React, {Component} from 'react'

export default class Answer extends Component {
  render(){
    let { score, title }= {...this.props.data}
    let { name } = this.props
    let total = this.props.total

    return (
      <div>
        <input type="radio"
               name={name}
               onClick={(e) => this.props.setScore(score)}
               value={score}/>
               {title}
      </div>
    )
  }
}
