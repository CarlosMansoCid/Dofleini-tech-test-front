import './styles.css'

const CheckBox = ({onActiveAction, onDeactiveAction, isExternalActivated=false}) => {
  console.log(onDeactiveAction)
  const action = (value) =>{
    value ?
    onActiveAction()
    :
    onDeactiveAction()
  }


  return (
    <input type="checkbox" 
           onChange={(e)=>action(e.target.checked)} 
           checked={isExternalActivated} className="ckeckbox"/>
  )
}

export default CheckBox