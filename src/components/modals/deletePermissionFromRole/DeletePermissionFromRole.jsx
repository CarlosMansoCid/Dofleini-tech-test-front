import BasicModal from "../basicModal/BasicModal"
import { useContext } from "react"
import { ModalContext } from "../../../contexts/ModalContext"
import { MESSAGES_TYPES } from "../messages/MessageBox"
import '../modals.styles.css'
import { useDeletePermissionFromRole } from "../../../hooks/useDeletePermissionFromRole"
import MessageBox from "../messages/MessageBox"
import DeleteButtonBig from "../../buttons/deleteButtonBig/DeleteButtonBig"

const DeletePermissionFromRoleModal = () => {
  const {deletePermissionFromRole} = useDeletePermissionFromRole(['delete-permission-from-role'])
  const {modalPayload} = useContext(ModalContext)

  const handleDeletePermission = () =>{
    deletePermissionFromRole.mutate({
      permissions:[`${modalPayload.entity}:${modalPayload.permission}`],
      id:modalPayload.roleId
    })
  } 
  return (
    <BasicModal>
      <div className="modal__content_container">
          <h5>Desea retirar el permiso: 
            <span className="red_names_span">{modalPayload.permission}</span> 
            al rol: 
            <span className="red_names_span">{modalPayload.role}</span>
          </h5>
          {
            !!deletePermissionFromRole.isSuccess ?
            <MessageBox type={MESSAGES_TYPES.SUCCESS} message='Permiso retirado con exito'/>
            :
            deletePermissionFromRole.isError ? <MessageBox type={MESSAGES_TYPES.ERROR} 
                                             message={deletePermissionFromRole?.error?.response?.data?.message}/>
            :<></>
          }
          <div className="add_modal__button_container">
          {
            !deletePermissionFromRole.isSuccess && !deletePermissionFromRole.isError ?
            <DeleteButtonBig action={()=>handleDeletePermission()} 
                             onProccess={deletePermissionFromRole.isPending} 
                             title='Retirar'/>
            :<></>
          }
          </div>
      </div>
    </BasicModal>
  )
}

export default DeletePermissionFromRoleModal