import BasicModal from "../basicModal/BasicModal"
import { useAddEntity } from "../../../hooks/useAddEntity"
import MessageBox, { MESSAGES_TYPES } from "../messages/MessageBox"
import './addRoleModal.styles.css'
import {useForm} from "react-hook-form"

const AddRoleModal = () => {
  const {handleSubmit, formState,register, watch} = useForm({
    mode: 'onChange'
  })

  const name = watch('name')
  
  const {addEntity} = useAddEntity(['create-entity'])
  const {errors} = formState

  const onSubmit = (data) =>{
    addEntity.mutate({
        name: data.name,
        permissions: []
    })
  }
  
  return (
    <BasicModal>
        <div className="new_role_modal__content_container">
            <h5>Crear nueva entidad</h5>
            <form onSubmit={handleSubmit(onSubmit)} className="role_form">
                <input type="text" 
                       className="new_role__input"
                       title="Solo debe contener letas mayusculas, en caso de ser varias palabras debe separarla 
                              con guion bajo, ej: ENTITY o NEW_ENTITY"
                       placeholder="Nombre del rol "
                       {...register('name',{
                        required: 'Este campo es requerido',
                        pattern: {
                            value: /^[A-Z]+(_[A-Z]+)*$/,
                            message: 'No es un nombre valido'
                        },
                        onChange: () => addEntity.reset()
                       })}/>
                {
                    !!errors && !!errors?.name?.message ? 
                    <MessageBox type={MESSAGES_TYPES.ERROR} message={errors?.name?.message}/>
                    :<></>
                }
                {
                    !!addEntity.isSuccess ?
                    <MessageBox type={MESSAGES_TYPES.SUCCESS} message='Rol creado con exito'/>
                    :
                    !!addEntity.isError ? <MessageBox type={MESSAGES_TYPES.ERROR} 
                                             message={addEntity?.error?.response?.data?.message}/>
                    :<></>
                }
                {
                    !errors?.name && !!name && !addEntity.isSuccess && !addEntity.isError ?
                    <input  type="submit" 
                            value={addEntity.isPending ? 'loading...' : 'Agregar'}
                            id={addEntity.isPending ? 'inactive' : ''}
                            className="new_role__submit_button"/>
                    :<></>
                }
            </form>
        </div>
    </BasicModal>
  )
}

export default AddRoleModal