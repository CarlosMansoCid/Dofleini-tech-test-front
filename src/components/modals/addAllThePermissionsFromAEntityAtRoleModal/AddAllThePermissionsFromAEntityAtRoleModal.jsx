import BasicModal from "../basicModal/BasicModal"
import { useContext } from "react"
import { ModalContext } from "../../../contexts/ModalContext"
import { MESSAGES_TYPES } from "../messages/MessageBox"
import SuccessButtonBig from "../../buttons/successButtonbig/SuccessButtonBig"
import { useAddPermissionAtRole } from "../../../hooks/useAddPermissionAtRole"
import MessageBox from "../messages/MessageBox"
import '../modals.styles.css'

const AddAllPermissionFromAEntityAtRoleModal = () => {
  const {addPermissionAtRole} = useAddPermissionAtRole(['add-permission-at-role'])
  const {modalPayload} = useContext(ModalContext)
  

  const handleAddPermission = () =>{
    const entitiesPermissions = []
    modalPayload.entities.forEach(entity => {
        entity.permissions.forEach(permission => {
            entitiesPermissions.push(`${entity.name}:${permission}`)
        })
      })
    addPermissionAtRole.mutate({
      permissions: entitiesPermissions,
      id:modalPayload.role._id
    })
  }
  return (
    <BasicModal>
      <div className="modal__content_container">
          <h5>Desea agregar todos los permisos al rol: 
            <span className="green_names_span"> { modalPayload.role.name}</span>
          </h5>
          {
            !!addPermissionAtRole.isSuccess ?
            <MessageBox type={MESSAGES_TYPES.SUCCESS} message='Permisos agregados con exito'/>
            :
            addPermissionAtRole.isError ? <MessageBox type={MESSAGES_TYPES.ERROR} 
                                             message={addPermissionAtRole?.error?.response?.data?.message}/>
            :<></>
          }
          <div className="add_modal__button_container">
          {
            !addPermissionAtRole.isSuccess && !addPermissionAtRole.isError ?
            <SuccessButtonBig action={()=>handleAddPermission()} 
              active={true} 
              onProccess={addPermissionAtRole.isPending} 
              title='Agregar'/>
            :<></>
          }
          </div>
      </div>
    </BasicModal>
  )
}

export default AddAllPermissionFromAEntityAtRoleModal