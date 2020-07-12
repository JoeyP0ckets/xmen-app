import React, { Component } from 'react'
import * as MutantFunctions from '../DataGrabber'
import ContentPane from './ContentPane'
import NavBar from "./NavBar"
import SideBar from './SideBar'

export default class MainBody extends Component {
  
  constructor (){
    super()
    this.state = {
      isLoading: true,
      selectedTeam: [],
      allMutants: [],
      sortedByTeam: false,
  }
    MutantFunctions.getAllMutants()
    // console.log(MutantFunctions.getMutantsByName())
  }

  componentDidMount(){
  //  let mutantNamesList = MutantFunctions.getMutantsByName()
   let allMutantsList = MutantFunctions.getAllMutants()
   this.setState({
    // mutantNames: mutantNamesList,
    allMutants: allMutantsList,
    })
  }

  toggleSortByTeam = () => {
    this.setState({
      sortedByTeam: !this.state.sortedByTeam
    })
  }

  sortTeams = () => {
    let mutantArray = this.state.allMutants
    if (this.state.sortedByTeam === true) {
     return mutantArray.sort((mutant1, mutant2) =>{  
        if (mutant1.team  > mutant2.team)
          return 1
          else  if (mutant1.team < mutant2.team)
            return -1
          else return 0 
        }) 
    }
    else if (this.state.sortedByTeam === false) {
      return mutantArray.sort((mutant1, mutant2) =>{  
        if (mutant1.name  > mutant2.name)
          return 1
          else  if (mutant1.name < mutant2.name)
            return -1
          else return 0 
        }) 
      }
  }
 
  
  
  addMutantToTeam = (mutant) => {
    console.log("You clicked just clicked " + mutant.name + "!")
    this.setState({ selectedTeam: [...this.state.selectedTeam, mutant.name]
      
    })
  }
  
  
  
  render() {
    console.log(this.state.selectedTeam)
    let mutantArrayFinal = this.sortTeams()
    // if (mutantArrayFinal === null || mutantArrayFinal === undefined || mutantArrayFinal.length < 1) {
    //   return (
    //     <></>
    //   )
    // }
    return(
      <div>
        <NavBar toggleSortByTeam={this.toggleSortByTeam}/>
        <ContentPane 
          // mutantNames={this.state.mutantNames} 
          getMutants={mutantArrayFinal}
          addMutantToTeam={this.addMutantToTeam}
        />
        <SideBar selectedTeam={this.state.selectedTeam}/>
      </div>
    )
  }
}