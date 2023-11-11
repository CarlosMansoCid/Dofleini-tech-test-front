import { stringAdapter } from "../../utils/strings-adapter"
import './styles.css'
import useToogle from '../../hooks/useToogle'
import CheckBox from "../checkBox/CheckBox"
import DeleteButton from "../buttons/DeleteButton"

const RoleCeld = ({role}) => {

  const {toogleValue,setTrue,setFalse} = useToogle()

  return (
    <td className='role_name' 
        onMouseEnter={()=>setTrue()}
        onMouseLeave={()=>setFalse()}>
      <div className="role_container">
        {
          !!toogleValue ?
            <CheckBox onActiveAction={()=>console.log('activado')}
                      onDeactiveAction={()=>console.log('desactivado')}
                      style={{marginRigth:'1rem'}}/>
          :
          <></>
        }
        {stringAdapter(role.name)}
        {
          !!toogleValue ?
            <DeleteButton/>
          :
          <></>
        }
      </div>
    </td>
  )
}

export default RoleCeld