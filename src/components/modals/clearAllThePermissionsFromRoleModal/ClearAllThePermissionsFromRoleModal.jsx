import './clearAllThePermissionsFromRole.styles.css'
import BasicModal from "../basicModal/BasicModal"
import { useContext } from "react"
import { ModalContext } from "../../../contexts/ModalContext"
import { MESSAGES_TYPES } from "../messages/MessageBox"
import MessageBox from "../messages/MessageBox"
import DeleteButtonBig from '../../buttons/deleteButtonBig/DeleteButtonBig'
import { useClearAllThePermissionFromRole } from '../../../hooks/useClearAllThePermissionsFromRole'

const ClearAllThePermissionsFromtRoleModal = () => {
  const {clearPermissionFromRole} = useClearAllThePermissionFromRole(['clear-permission-from-role'])
  const {modalPayload} = useContext(ModalContext)
  
  const handleClearPermission = () =>{
    clearPermissionFromRole.mutate({
      id:modalPayload.roleId
    })
  }

  return (
    <BasicModal>
      <div className="clear_all_permissions_modal__content_container">
          <h5>Desea retirar todos los permisos al rol: 
            <span className="clear_all_permissions_names_span"> { modalPayload.role}</span>
          </h5>
          {
            !!clearPermissionFromRole.isSuccess ?
            <MessageBox type={MESSAGES_TYPES.SUCCESS} message='Permisos retirados con exito'/>
            :
            clearPermissionFromRole.isError ? <MessageBox type={MESSAGES_TYPES.ERROR} 
                                             message={clearPermissionFromRole?.error?.response?.data?.message}/>
            :<></>
          }
          <div className="clear_all_permissions_modal__button_container">
          {
            !clearPermissionFromRole.isSuccess && !clearPermissionFromRole.isError ?
            <DeleteButtonBig action={()=>handleClearPermission()} 
              active={true} 
              onProccess={clearPermissionFromRole.isPending} 
              title='Retirar'/>
            :<></>
          }
          </div>
      </div>
    </BasicModal>
  )
}

export default ClearAllThePermissionsFromtRoleModal