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
      mutantNameArray: [],
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
 
  
  
  selectMutant = (event) => {
    console.log(event)
  //  return console.log(selectedMutantName)
  }
  
  
  
  render() {
    console.log(this.state)
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
          selectMutant={this.selectMutant}
        />
        <SideBar />
      </div>
    )
  }
}