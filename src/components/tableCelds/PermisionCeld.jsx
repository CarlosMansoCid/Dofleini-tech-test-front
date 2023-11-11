import { stringAdapter } from '../../utils/strings-adapter'
import './styles.css'
import useToogle from '../../hooks/useToogle'
import CheckBox from '../checkBox/CheckBox'
import DeleteButton from '../buttons/DeleteButton'

const PermisionCeld = ({permision}) => {

  const {toogleValue,setFalse,setTrue} = useToogle()

  return (
    <th className='permision_celd'
        onMouseEnter={()=>setTrue()}
        onMouseLeave={()=>{setFalse()}}>
      <div className='role_container' id='permision'>
        {
          !!toogleValue ?
          <CheckBox onActiveAction={()=>{}} onDeactiveAction={()=>{}}/>
          :
          <></>
        }
        {stringAdapter(permision)}
        {
            !!toogleValue ?
            <DeleteButton/>
            :<></>
          }
      </div>
    </th>
  )
}

export default PermisionCeld