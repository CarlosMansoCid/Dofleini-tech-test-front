import { stringAdapter } from "../../utils/strings-adapter"
import './styles.css'
import useToogle from '../../hooks/useToogle'
import CheckBox from "../checkBox/CheckBox"
import DeleteButton from "../buttons/DeleteButton"
import { useContext, useMemo } from "react"
import { ModalContext } from "../../contexts/ModalContext"
import { MODALS_TYPES } from "../modals/modalsManager/ModalsManager"

const RoleCeld = ({role, entities}) => {
  const {toogleValue,setTrue ,setFalse} = useToogle()
  const {setModalPayload, setOpenModal} = useContext(ModalContext)

  const handleDeleteRole = () =>{
    setModalPayload({
      type: MODALS_TYPES.DELETE_ROLE,
      payload:role
    })
    setOpenModal()
  }
  const handleAddAllTheEntityPermissions = () =>{
    setModalPayload({
      type:MODALS_TYPES.ADD_ALL_PERMISSIONS,
      role: role,
      entities: entities
    })
    setOpenModal()
  }
  const clearAllThePermissions = () =>{
    setModalPayload({
      type: MODALS_TYPES.CLEAR_ALL_PERMISSIONS,
      roleId: role._id,
      role: role.name
    })
    setOpenModal()
  }
  const isExternalActivated = useMemo(() =>{
    const entitiesPermissions = []
    entities.forEach(entity => {
      entity.permissions.forEach(permission => {
          entitiesPermissions.push(`${entity.name}:${permission}`)
      })
    })
    return entitiesPermissions.length === role.permissions.length
  }, [role, entities])

  return (
    <td className='role_name' 
        onMouseEnter={()=>setTrue()}
        onMouseLeave={()=>setFalse()}>
      <div className="role_container">
        {
          !!toogleValue ?
            <CheckBox onActiveAction={()=>handleAddAllTheEntityPermissions()}
                      onDeactiveAction={()=>clearAllThePermissions()}
                      style={{marginRigth:'1rem'}}
                      isExternalActivated={isExternalActivated}/>
          :
          <></>
        }
        {stringAdapter(role.name)}
        {
          !!toogleValue ?
            <DeleteButton action={()=>handleDeleteRole()}/>
          :
          <></>
        }
      </div>
    </td>
  )
}

export default RoleCeld