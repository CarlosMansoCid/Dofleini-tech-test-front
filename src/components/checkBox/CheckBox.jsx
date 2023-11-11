import './styles.css'
import { useRef } from 'react'

const CheckBox = ({onActiveAction, onDeactiveAction, isExternalActivated=false}) => {
  const checkboxRef = useRef()

  const action = (e) =>{

    !!e.target.checked ?
    onActiveAction()
    :
    onDeactiveAction()
  }
  
  if(isExternalActivated){
    checkboxRef.current.checked = true
  }

  return (
    <input type="checkbox" ref={checkboxRef}  onChange={(e)=>action(e)} className="ckeckbox"/>
  )
}

export default CheckBox