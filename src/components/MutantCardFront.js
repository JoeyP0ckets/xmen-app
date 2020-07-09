import React from 'react'

const MutantCardFront = (props) => {
  

  return (
    <div>
        <img src={props.mutant.mainImage} height={200} width={200} alt={props.mutant.name}></img>
        <h1>{props.mutant.name}</h1>
    </div>
  )
}

export default MutantCardFront