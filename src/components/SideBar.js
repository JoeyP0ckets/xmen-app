import React from 'react'

const SideBar = (props) => {
  console.log(props)
  return (
    <div>
      {props.selectedMutant}
    </div>
  )
    
}

export default SideBar