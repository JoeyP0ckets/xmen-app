import React from 'react'

const mutantCardBack = (props) => {
  let mutant = props.mutant
  return (
    <div height={200} width={200}>
      <h3>Real Name: {mutant.realName}</h3>
      <h6>Powers: {mutant.powers}</h6>
      <h3>Team: {mutant.team}</h3>
      {/* <h6>Bio: {mutant.bio}</h6> */}

    </div>
  )
}

export default mutantCardBack