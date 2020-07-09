import React from 'react'

const mutantCardBack = (props) => {
  let mutant = props.mutant
  return (
    <div>
      <h3>Real Name: {mutant.realName}</h3>
      <h5>Powers: {mutant.powers}</h5>
      <h3>Team: {mutant.team}</h3>
      <h7>Bio: {mutant.bio}</h7>

    </div>
  )
}

export default mutantCardBack