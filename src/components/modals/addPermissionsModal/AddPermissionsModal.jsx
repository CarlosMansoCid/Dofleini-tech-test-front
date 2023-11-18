import BasicModal from "../basicModal/BasicModal"
import {useAddPermissions} from "../../../hooks/useAddPermissions"
import MessageBox, { MESSAGES_TYPES } from "../messages/MessageBox"
import './addRoleModal.styles.css'
import {useForm} from "react-hook-form"
import Services from '../../../services/services'
import ENDPOINTS from "../../../services/endpoints"
import { useQuery } from "@tanstack/react-query"

const AddPermissionsModal = () => {
  const {handleSubmit, formState,register, watch} = useForm({
    mode: 'onChange'
  })
  const entitiesServices = new Services()
  const {isLoading, data, isError} = useQuery({
    queryKey: ['entities'],
    queryFn:()=>entitiesServices.getRequest(ENDPOINTS.entities)
  })

  const entity = watch('entity')
  const permissions = watch('permissions')
  
  const {addPermissions} = useAddPermissions(['create-entity'])
  const {errors} = formState

  const onSubmit = (data) =>{
    addPermissions.mutate({
        entityId: data.entity,
        permissions: [data.permissions]
    })
  }
  
  return (
    <BasicModal>
        <div className="new_role_modal__content_container">
            <h5>Agregar nuevo permiso a la entidad:</h5>
            <form onSubmit={handleSubmit(onSubmit)} className="role_form">
              <select {...register('entity', {required:'Seleccione una entidad'})} className="new_role__input">
                {
                  !!data ?
                  data.data.entities.map(dat =>{
                    return(
                      <option key={dat._id} value={dat._id}>{dat.name}</option>
                    )
                  }):<></>
                }
              </select>
              {
                    !!errors && !!errors?.entity?.message ? 
                    <MessageBox type={MESSAGES_TYPES.ERROR} message={errors?.entity?.message}/>
                    :<></>
                }
                <input type="text" 
                       className="new_role__input"
                       title="Solo debe contener letas mayusculas, en caso de ser varias palabras debe separarla 
                              con guion bajo, ej: PERMISSION o NEW_PERMISSION"
                       placeholder="Nombre del permiso "
                       {...register('permissions',{
                        required: 'Este campo es requerido',
                        pattern: {
                            value: /^[A-Z]+(_[A-Z]+)*$/,
                            message: 'No es un nombre valido'
                        },
                        onChange: () => addPermissions.reset()
                       })}/>
                {
                    !!errors && !!errors?.permissions?.message ? 
                    <MessageBox type={MESSAGES_TYPES.ERROR} message={errors?.permissions?.message}/>
                    :<></>
                }
                {
                    !!addPermissions.isSuccess ?
                    <MessageBox type={MESSAGES_TYPES.SUCCESS} message='Rol creado con exito'/>
                    :
                    !!addPermissions.isError ? <MessageBox type={MESSAGES_TYPES.ERROR} 
                                             message={addPermissions?.error?.response?.data?.message}/>
                    :<></>
                }
                {
                    !errors?.entity && !errors.permissions && !!entity && !!permissions 
                    && !addPermissions.isSuccess && !addPermissions.isError ?
                    <input  type="submit" 
                            value={addPermissions.isPending ? 'loading...' : 'Agregar'}
                            id={addPermissions.isPending ? 'inactive' : ''}
                            className="new_role__submit_button"/>
                    :<></>
                }
            </form>
        </div>
    </BasicModal>
  )
}

export default AddPermissionsModal