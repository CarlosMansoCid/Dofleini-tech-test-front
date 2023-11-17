import BasicModal from "../basicModal/BasicModal"
import { useDeleteRole } from "../../../hooks/useDeleteRole"
import { useContext } from "react"
import { ModalContext } from "../../../contexts/ModalContext"
import './deleteRoleModal.styles.css'
import DeleteButtonBig from "../../buttons/deleteButtonBig/DeleteButtonBig"
import MessageBox from "../messages/MessageBox"
import { MESSAGES_TYPES } from "../messages/MessageBox"

const DeleteRoleModal = () => {
  const {deleteRole} = useDeleteRole(['delete_role'])
  const {modalPayload} = useContext(ModalContext)

  return (
    <BasicModal>
      <div className="delete_modal__content_container">
          <h5>Desea borrar el rol: {modalPayload.payload.name}</h5>
          {
            !!deleteRole.isSuccess ?
            <MessageBox type={MESSAGES_TYPES.SUCCESS} message='Rol eliminado con exito'/>
            :
            deleteRole.isError ? <MessageBox type={MESSAGES_TYPES.ERROR} 
                                             message={deleteRole?.error?.response?.data?.message}/>
            :<></>
          }
          <div className="delete_modal__button_container">
            {
              !deleteRole.isSuccess && !deleteRole.isError ?
              <DeleteButtonBig title='Eliminar rol' 
                               action={()=>deleteRole.mutate(modalPayload.payload._id)}
                               onProccess={deleteRole.isPending}/>
              :
              <></>
            }
              </div>
      </div>
    </BasicModal>
  )
}

export default DeleteRoleModal