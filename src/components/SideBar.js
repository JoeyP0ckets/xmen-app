import React from 'react'

const SideBar = (props) => {
  console.log(props)
  
  let teamArray = props.selectedTeam
  
  return (
    <div>
      <h1>Your Team</h1>
      <ul>
        <li>
          {teamArray.join(", ")}
        </li>
      </ul>
    </div>
  )
    
}

export default SideBar