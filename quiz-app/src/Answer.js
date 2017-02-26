import React, {Component} from 'react'

export default class Answer extends Component {
  render(){
    let { score, title }= {...this.props.data}
    let { name } = this.props
    return (
      <div>
        <input type="radio"
               name={name}
               value={score}/>
               {title}
      </div>
    )
  }
}
