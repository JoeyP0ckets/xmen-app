import React, { Component } from 'react'
import MutantContainer from './MutantContainer'


export default class ContentPane extends Component {
  
  
generateMutantContainer = () => {
  // console.log(this.props.getMutants)
  
  
  
  
  return this.props.getMutants.map(mutant =>
   <MutantContainer
    mutant={mutant}
    addMutantToTeam={this.props.addMutantToTeam}
    />
  )
}
  
  
  render() {
    var divStyle = {
      border: '30px solid black'
    };
    
    
    console.log(this.props)
    return (
      <div className="content-pane" style={divStyle}>
        I am the Content Pane
        

        {this.generateMutantContainer()}
        
        
      </div>
    )
  }
}
