import '../modals.styles.css'
import BasicModal from "../basicModal/BasicModal"
import { useContext } from "react"
import { ModalContext } from "../../../contexts/ModalContext"
import { MESSAGES_TYPES } from "../messages/MessageBox"
import SuccessButtonBig from "../../buttons/successButtonbig/SuccessButtonBig"
import MessageBox from "../messages/MessageBox"
import { useAddOnePermissionToAllRoles } from '../../../hooks/useAddOnePermissionToAllRoles'

const AddOnePermissionToAllRoles = () => {
  const {addOnePermissionToAllRoles} = useAddOnePermissionToAllRoles(['add-one-permissions-to-all-roles'])
  const {modalPayload} = useContext(ModalContext)

  const handleAddPermission = () =>{
    addOnePermissionToAllRoles.mutate({
      permission: modalPayload.permissions
    })
  }
  return (
    <BasicModal>
      <div className="modal__content_container">
          <h5>Desea agregar el permiso: 
            <span className="green_names_span"> { modalPayload.permission }</span>
            de la entidad: <span className='green_names_span'> { modalPayload.entity } </span>
            a todos los <span className='green_names_span'> ROLES</span>
          </h5>
          {
            !!addOnePermissionToAllRoles.isSuccess ?
            <MessageBox type={MESSAGES_TYPES.SUCCESS} message='Permisos agregados con exito'/>
            :
            addOnePermissionToAllRoles.isError ? <MessageBox type={MESSAGES_TYPES.ERROR} 
                                             message={addOnePermissionToAllRoles?.error?.response?.data?.message}/>
            :<></>
          }
          <div className="add_modal__button_container">
          {
            !addOnePermissionToAllRoles.isSuccess && !addOnePermissionToAllRoles.isError ?
            <SuccessButtonBig action={()=>handleAddPermission()} 
              active={true} 
              onProccess={addOnePermissionToAllRoles.isPending} 
              title='Agregar'/>
            :<></>
          }
          </div>
      </div>
    </BasicModal>
  )
}

export default AddOnePermissionToAllRoles 
