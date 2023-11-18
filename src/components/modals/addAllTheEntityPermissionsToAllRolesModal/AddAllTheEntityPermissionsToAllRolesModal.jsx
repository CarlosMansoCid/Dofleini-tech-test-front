import '../modals.styles.css'
import BasicModal from "../basicModal/BasicModal"
import { useContext } from "react"
import { ModalContext } from "../../../contexts/ModalContext"
import { MESSAGES_TYPES } from "../messages/MessageBox"
import SuccessButtonBig from "../../buttons/successButtonbig/SuccessButtonBig"
import MessageBox from "../messages/MessageBox"
import { useAddAllPermissionsToAEntityToAllRoles } from '../../../hooks/useAddAllPermissionsToAEntityToAllRoles'

const AddAllTheEntityPermissionsToAllRolesModal = () => {
  const {addPermissionToAllRoles} = useAddAllPermissionsToAEntityToAllRoles(['add-all-permissions-to-all-roles'])
  const {modalPayload} = useContext(ModalContext)
  

  const handleAddPermission = () =>{
    addPermissionToAllRoles.mutate({
      entityId: modalPayload.entityId
    })
  }
  return (
    <BasicModal>
      <div className="modal__content_container">
          <h5>Desea agregar todos los permisos de la entidad: 
            <span className="green_names_span"> { modalPayload.entityName}</span>
            a todos los <span className='green_names_span'>ROLES</span>
          </h5>
          {
            !!addPermissionToAllRoles.isSuccess ?
            <MessageBox type={MESSAGES_TYPES.SUCCESS} message='Permisos agregados con exito'/>
            :
            addPermissionToAllRoles.isError ? <MessageBox type={MESSAGES_TYPES.ERROR} 
                                             message={addPermissionToAllRoles?.error?.response?.data?.message}/>
            :<></>
          }
          <div className="add_modal__button_container">
          {
            !addPermissionToAllRoles.isSuccess && !addPermissionToAllRoles.isError ?
            <SuccessButtonBig action={()=>handleAddPermission()} 
              active={true} 
              onProccess={addPermissionToAllRoles.isPending} 
              title='Agregar'/>
            :<></>
          }
          </div>
      </div>
    </BasicModal>
  )
}

export default AddAllTheEntityPermissionsToAllRolesModal 
