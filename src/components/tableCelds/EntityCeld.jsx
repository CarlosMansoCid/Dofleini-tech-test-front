import { stringAdapter } from "../../utils/strings-adapter"
import CheckBox from "../checkBox/CheckBox"
import useToogle from "../../hooks/useToogle"
import DeleteButton from "../buttons/DeleteButton"
import { useContext } from "react"
import { ModalContext } from "../../contexts/ModalContext"
import { MODALS_TYPES } from "../modals/modalsManager/ModalsManager"

const EntityCeld = ({entity}) => {
  const {toogleValue,setTrue,setFalse} = useToogle()
  const context = useContext(ModalContext)

  const handleAddAllThePermissions = () =>{
    context.setModalPayload({
      type: MODALS_TYPES.ADD_ALL_ENTITY_PERMISSIONS_AT_ALL_ROLES,
      entityId: entity._id,
      entityName: entity.name
    })
    context.setOpenModal()
  }

  return (
    <th key={entity.id} 
        className="entity_celd"
        colspan={entity.permissions.length}
        onMouseEnter={()=>setTrue()}
        onMouseLeave={()=>{setFalse()}}>
        <div className="role_container">
          {
            !!toogleValue ?
            <CheckBox onActiveAction={()=>handleAddAllThePermissions()} 
                      onDeactiveAction={()=>{}}
                      />
            :<></>
          }
          {stringAdapter(entity.name)}
          {
            !!toogleValue ?
            <DeleteButton/>
            :<></>
          }
        </div>
    </th>
  )
}

export default EntityCeld