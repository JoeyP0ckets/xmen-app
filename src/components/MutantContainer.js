import React, { Component } from 'react'
import MutantCardBack from './MutantCardBack'
import MutantCardFront from './MutantCardFront'
import "../../src/App.css"
export default class MutantContainer extends Component {

  // let mutant = props.mutant

  state = {
    isLoading: false,
    isFront: true,
  }
   
  componentDidMount() {

  }
  
  toggleCard = () => {
    // console.log(event.target.value)
    this.setState(previousState => {
      return {
        isFront: !previousState.isFront
      }
    })
  }


  render() {
    
    
    // console.log(this.props)
    // console.log(this.state)
    return(
      <div onClick={this.toggleCard} className="mutant-card">
        {this.state.isFront && <MutantCardFront mutant={this.props.mutant}/>
        }
        {!this.state.isFront && <MutantCardBack mutant={this.props.mutant}/>
        }
        <button className="add-mutant" onClick={ event => this.props.selectMutant(event)}>Add Mutant!</button>
      </div>
    )
  }
}

