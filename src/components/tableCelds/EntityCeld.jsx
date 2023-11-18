import { stringAdapter } from "../../utils/strings-adapter"
import CheckBox from "../checkBox/CheckBox"
import useToogle from "../../hooks/useToogle"
import DeleteButton from "../buttons/DeleteButton"
import { useContext } from "react"
import { ModalContext } from "../../contexts/ModalContext"
import { MODALS_TYPES } from "../modals/modalsManager/ModalsManager"
import useGetIfAllRolesHaveAllPermissionsOfAEntity from "../../hooks/useGetIfAllRolesHaveAllPermissionsOfAEntity"


const EntityCeld = ({entity}) => {
  const {toogleValue,setTrue,setFalse} = useToogle()
  const context = useContext(ModalContext)
  const {haveAllThePermissions} = useGetIfAllRolesHaveAllPermissionsOfAEntity(entity)

  const handleAddAllThePermissions = () =>{
    context.setModalPayload({
      type: MODALS_TYPES.ADD_ALL_ENTITY_PERMISSIONS_AT_ALL_ROLES,
      entityId: entity._id,
      entityName: entity.name
    })
    context.setOpenModal()
  }
  const handleDeleteAllThePermissionsFromAllRoles = () =>{
    context.setModalPayload({
      type: MODALS_TYPES.DELETE_ALL_ENTITY_PERMISSIONS_FROM_ALL_ROLES,
      entity: entity
    })
    context.setOpenModal()
  }
  const handleDeleteAllThePermissionsFromEntity = () =>{
    context.setModalPayload({
      type: MODALS_TYPES.DELETE_ALL_ENTITY_PERMISSIONS,
      permissions: entity.permissions,
      entity: entity
    })
    context.setOpenModal()
  }

  return (
    <th key={entity.id} 
        className="entity_celd"
        colSpan={entity.permissions.length}
        onMouseEnter={()=>setTrue()}
        onMouseLeave={()=>{setFalse()}}>
        <div className="role_container">
          {
            !!toogleValue ?
            <CheckBox onActiveAction={()=>handleAddAllThePermissions()} 
                      onDeactiveAction={()=>handleDeleteAllThePermissionsFromAllRoles()}
                      isExternalActivated={haveAllThePermissions}
                      />
            :<></>
          }
          {stringAdapter(entity.name)}
          {
            !!toogleValue ?
            <DeleteButton action={() => handleDeleteAllThePermissionsFromEntity()}/>
            :<></>
          }
        </div>
    </th>
  )
}

export default EntityCeld