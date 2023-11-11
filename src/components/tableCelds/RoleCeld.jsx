import { stringAdapter } from "../../utils/strings-adapter"
import './styles.css'
import useToogle from '../../hooks/useToogle'
import CheckBox from "../checkBox/CheckBox"

const RoleCeld = ({role}) => {

  const {toogleValue,setTrue,setFalse} = useToogle()

  return (
    <td className='role_name' 
        onMouseEnter={()=>setTrue()}
        onMouseLeave={()=>setFalse()}>
      <div className="role_container">
        {stringAdapter(role.name)}
        {
          !!toogleValue ?
            <CheckBox onActiveAction={()=>console.log('activado')}
                      onDeactiveAction={()=>console.log('desactivado')}/>
          :
          <></>
        }
      </div>
    </td>
  )
}

export default RoleCeld