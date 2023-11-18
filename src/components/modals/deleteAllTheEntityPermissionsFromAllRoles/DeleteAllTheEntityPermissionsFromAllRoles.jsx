import BasicModal from "../basicModal/BasicModal"
import { useContext } from "react"
import { ModalContext } from "../../../contexts/ModalContext"
import { MESSAGES_TYPES } from "../messages/MessageBox"
import './deletePermissionsFromRoleModal.styles.css'
import MessageBox from "../messages/MessageBox"
import DeleteButtonBig from "../../buttons/deleteButtonBig/DeleteButtonBig"
import { useDeleteAllTheEntityPermissionsFromARole } from "../../../hooks/useDeleteAllTheEntityPermissionsFromARole"

const DeletePermissionFromRoleModal = () => {
  const {deleteTheEntityPermissionsFromAllRoles} = useDeleteAllTheEntityPermissionsFromARole(['delete-all-the-entity-permissions-from-all-roles'])
  const {modalPayload} = useContext(ModalContext)

  const handleDeletePermission = () =>{
    deleteTheEntityPermissionsFromAllRoles.mutate({
      entityId:modalPayload.entity._id
    })
  } 
  return (
    <BasicModal>
      <div className="delete_role_modal__content_container">
          <h5>Desea retirar todos los permisos de la entidad: 
            <span className="delete_role_modal__names_span">{modalPayload.entity.name}</span> 
            de todos los: 
            <span className="delete_role_modal__names_span"> roles?</span>
          </h5>
          {
            !!deleteTheEntityPermissionsFromAllRoles.isSuccess ?
            <MessageBox type={MESSAGES_TYPES.SUCCESS} message='Permisos retirados con exito'/>
            :
            deleteTheEntityPermissionsFromAllRoles.isError ? <MessageBox type={MESSAGES_TYPES.ERROR} 
                                             message={deleteTheEntityPermissionsFromAllRoles?.error?.response?.data?.message}/>
            :<></>
          }
          <div className="delete_role_modal__button_container">
          {
            !deleteTheEntityPermissionsFromAllRoles.isSuccess && !deleteTheEntityPermissionsFromAllRoles.isError ?
            <DeleteButtonBig action={()=>handleDeletePermission()} 
                             onProccess={deleteTheEntityPermissionsFromAllRoles.isPending} 
                             title='Retirar'/>
            :<></>
          }
          </div>
      </div>
    </BasicModal>
  )
}

export default DeletePermissionFromRoleModal