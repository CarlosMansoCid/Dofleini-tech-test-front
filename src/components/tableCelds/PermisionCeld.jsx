import { stringAdapter } from '../../utils/strings-adapter'
import './styles.css'
import useToogle from '../../hooks/useToogle'
import CheckBox from '../checkBox/CheckBox'

const PermisionCeld = ({permision}) => {

  const {toogleValue,setFalse,setTrue} = useToogle()

  return (
    <th className='permision_celd'
        onMouseEnter={()=>setTrue()}
        onMouseLeave={()=>{setFalse()}}>
      <div className='role_container'>
        {stringAdapter(permision)}
        {
          !!toogleValue ?
          <CheckBox onActiveAction={()=>{}} onDeactiveAction={()=>{}}/>
          :
          <></>
        }
      </div>
    </th>
  )
}

export default PermisionCeld