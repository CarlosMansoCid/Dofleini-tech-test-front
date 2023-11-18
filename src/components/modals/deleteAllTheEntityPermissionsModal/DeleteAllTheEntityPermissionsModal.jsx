import BasicModal from "../basicModal/BasicModal"
import { useContext } from "react"
import { ModalContext } from "../../../contexts/ModalContext"
import { MESSAGES_TYPES } from "../messages/MessageBox"
import '../modals.styles.css'
import MessageBox from "../messages/MessageBox"
import DeleteButtonBig from "../../buttons/deleteButtonBig/DeleteButtonBig"
import { useDeleteEntityPermissions } from "../../../hooks/useDeleteEntityPermissions"

const DeleteAllEntityPermissionsModal = () => {
  const {deletePermissions} = useDeleteEntityPermissions(['delete-entity-permissions'])
  const {modalPayload} = useContext(ModalContext)

  const handleDeletePermission = () =>{
    deletePermissions.mutate({
      permissions: modalPayload.permissions,
      entityId:modalPayload.entity._id
    })
  } 
  return (
    <BasicModal>
      <div className="modal__content_container">
          <h5>Desea retirar todos los permisos de la entidad: 
            <span className="red_names_span">{modalPayload.entity.name}</span> 
          </h5>
          {
            !!deletePermissions.isSuccess ?
            <MessageBox type={MESSAGES_TYPES.SUCCESS} message='Permisos retirados con exito'/>
            :
            deletePermissions.isError ? <MessageBox type={MESSAGES_TYPES.ERROR} 
                                             message={deletePermissions?.error?.response?.data?.message}/>
            :<></>
          }
          <div className="delete_role_modal__button_container">
          {
            !deletePermissions.isSuccess && !deletePermissions.isError ?
            <DeleteButtonBig action={()=>handleDeletePermission()} 
                             onProccess={deletePermissions.isPending} 
                             title='Retirar'/>
            :<></>
          }
          </div>
      </div>
    </BasicModal>
  )
}

export default DeleteAllEntityPermissionsModal