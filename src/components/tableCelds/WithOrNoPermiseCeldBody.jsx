import { useContext } from "react"
import WithOutPermisonCeld from "./WithOutPermisonCeld"
import WithPermisionCeld from "./WithPermisionCeld"
import { ModalContext } from "../../contexts/ModalContext"
import { MODALS_TYPES } from "../modals/modalsManager/ModalsManager"


const WithOrNoPermiseCeldBody = ({isActive, entity, permision, role}) => {
  const context = useContext(ModalContext)
  
  const handleAddPermission = () => {
    context.setModalPayload({
      type: MODALS_TYPES.ADD_PERMISSION_AT_ROLE,
      role: role.name,
      roleId: role._id,
      entity:entity.name, 
      permission: permision})
    context.setOpenModal()
  }

  return (
    isActive ?
    <WithPermisionCeld action={()=>{}}/>
    :
    <WithOutPermisonCeld action={()=>handleAddPermission()}/>
  )
}

export default WithOrNoPermiseCeldBody