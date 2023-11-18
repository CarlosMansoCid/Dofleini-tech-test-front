import BasicModal from "../basicModal/BasicModal"
import { useContext } from "react"
import { ModalContext } from "../../../contexts/ModalContext"
import { MESSAGES_TYPES } from "../messages/MessageBox"
import '../modals.styles.css'
import SuccessButtonBig from "../../buttons/successButtonbig/SuccessButtonBig"
import { useAddPermissionAtRole } from "../../../hooks/useAddPermissionAtRole"
import MessageBox from "../messages/MessageBox"

const AddPermissionAtRoleModal = () => {
  const {addPermissionAtRole} = useAddPermissionAtRole(['add-permission-at-role'])
  const {modalPayload} = useContext(ModalContext)

  const handleAddPermission = () =>{
    addPermissionAtRole.mutate({
      permissions:[`${modalPayload.entity}:${modalPayload.permission}`],
      id:modalPayload.roleId
    })
  }
  return (
    <BasicModal>
      <div className="modal__content_container">
          <h5>Desea agregar el permiso: 
            <span className="green_names_span">{modalPayload.permission}</span> 
            al rol: 
            <span className="green_names_span">{modalPayload.role}</span>
          </h5>
          {
            !!addPermissionAtRole.isSuccess ?
            <MessageBox type={MESSAGES_TYPES.SUCCESS} message='Permiso actualizado con exito'/>
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

export default AddPermissionAtRoleModal