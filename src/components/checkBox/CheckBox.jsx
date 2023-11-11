import React from 'react'

const CheckBox = ({onActiveAction, onDeactiveAction}) => {

  const action = (e) =>{

    !!e.target.checked ?
    onActiveAction()
    :
    onDeactiveAction()
  }

  return (
    <input type="checkbox"  onChange={(e)=>action(e)}/>
  )
}

export default CheckBox