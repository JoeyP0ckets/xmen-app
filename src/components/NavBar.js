import React from 'react'

const NavBar = (props) => {
    console.log(props)
  return (
      <div>
        <h1>Welcome X-MAN</h1>
        <h3>Select A Character</h3>
        <button onClick={props.toggleSortByTeam} className="team-sort">Sort By Team</button>
      </div>
    )
} 

export default NavBar