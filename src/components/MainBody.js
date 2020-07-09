import React, { Component } from 'react'
import * as MutantFunctions from '../DataGrabber'
import ContentPane from './ContentPane'
import NavBar from "./NavBar"

export default class MainBody extends Component {
  
  constructor (){
    super()
    this.state = {
      isLoading: true,
      mutantNames: [],
      allMutants: [],
  }
    MutantFunctions.getAllMutants()
    // console.log(MutantFunctions.getMutantsByName())
  }

  componentDidMount(){
   let mutantNamesList = MutantFunctions.getMutantsByName()
   let allMutantsList = MutantFunctions.getAllMutants()
   this.setState({
    mutantNames: mutantNamesList,
    allMutants: allMutantsList,
    })
  }

  render() {
    return(
      <div>
        <NavBar />
        <ContentPane mutantNames={this.state.mutantNames} getMutants={this.state.allMutants}/>
      </div>
    )
  }
}