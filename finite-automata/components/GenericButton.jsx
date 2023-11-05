import React from 'react'

const GenericButton = ({onClick, label}) => {
  return (
    <button className="button-generic" onClick={onClick}>{label}</button>
  )
}
export {GenericButton}