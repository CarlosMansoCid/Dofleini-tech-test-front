import './styles.css'

const CheckBox = ({onActiveAction, onDeactiveAction, isExternalActivated=false}) => {

  const action = (e) =>{

    !!e.target.checked ?
    onActiveAction()
    :
    onDeactiveAction()
  }

  return (
    <input type="checkbox"  onChange={(e)=>action(e)} className="ckeckbox" checked={isExternalActivated}/>
  )
}

export default CheckBox