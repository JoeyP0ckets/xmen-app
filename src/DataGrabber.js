import React from 'react'
import mutants from './MutantData.json'

export function getAllMutants() {
  return mutants.map(mutant => mutant)

}

export function getMutantsByName() {
  return mutants.map(mutant => mutant.name)
}



