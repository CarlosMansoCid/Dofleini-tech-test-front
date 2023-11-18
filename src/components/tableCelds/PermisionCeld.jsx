import { stringAdapter } from '../../utils/strings-adapter'
import './styles.css'
import useToogle from '../../hooks/useToogle'
import CheckBox from '../checkBox/CheckBox'
import DeleteButton from '../buttons/DeleteButton'
import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import {MODALS_TYPES} from '../modals/modalsManager/ModalsManager'

const PermisionCeld = ({permission, entity}) => {

  const {toogleValue,setFalse,setTrue} = useToogle()
  const context = useContext(ModalContext)

  const handleAddPermissionToAllRoles = () =>{
    context.setModalPayload({
      type: MODALS_TYPES.ADD_ONE_PERMISSION_TO_ALL_ROLES,
      permissions: `${entity}:${permission}`,
      permission: permission,
      entity: entity.name
    })
    context.setOpenModal()
  }
  const handleDeletePermission =()=>{
    context.setModalPayload({
      type:MODALS_TYPES.DELETE_ALL_ENTITY_PERMISSIONS,
      entity: entity,
      permissions: [permission],
      one:true
    })
    context.setOpenModal()
  }

  return (
    <th className='permision_celd'
        onMouseEnter={()=>setTrue()}
        onMouseLeave={()=>{setFalse()}}>
      <div className='role_container' id='permision'>
        {
          !!toogleValue ?
          <CheckBox onActiveAction={()=>handleAddPermissionToAllRoles()} onDeactiveAction={()=>{}}/>
          :
          <></>
        }
        {stringAdapter(permission)}
        {
            !!toogleValue ?
            <DeleteButton action={()=>handleDeletePermission()}/>
            :<></>
          }
      </div>
    </th>
  )
}

export default PermisionCeld