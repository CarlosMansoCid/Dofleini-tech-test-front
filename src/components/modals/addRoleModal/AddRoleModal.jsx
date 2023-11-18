import { useCreateRole } from "../../../hooks/useCreateRole"
import BasicModal from "../basicModal/BasicModal"
import MessageBox, { MESSAGES_TYPES } from "../messages/MessageBox"
import '../modals.styles.css'
import {useForm} from "react-hook-form"

const AddRoleModal = () => {
  const {handleSubmit, formState,register, watch} = useForm({
    mode: 'onChange'
  })

  const name = watch('name')
  
  const {createRole} = useCreateRole(['create-role'], {})
  const {errors} = formState

  const onSubmit = (data) =>{
    createRole.mutate({
        name: data.name,
        permissions: []
    })
  }
  
  return (
    <BasicModal>
        <div className="modal__content_container">
            <h5>Crear nuevo rol</h5>
            <form onSubmit={handleSubmit(onSubmit)} className="add_modal__form">
                <input type="text" 
                       className="add_modal__input"
                       title="Solo debe contener letas mayusculas, en caso de ser varias palabras debe separarla 
                              con guion bajo, ej: ROLE o NEW_ROLE"
                       placeholder="Nombre del rol "
                       {...register('name',{
                        required: 'Este campo es requerido',
                        pattern: {
                            value: /^[A-Z]+(_[A-Z]+)*$/,
                            message: 'No es un nombre valido'
                        },
                        onChange: () =>createRole.reset()
                       })}/>
                {
                    !!errors && !!errors?.name?.message ? 
                    <MessageBox type={MESSAGES_TYPES.ERROR} message={errors?.name?.message}/>
                    :<></>
                }
                {
                    !!createRole.isSuccess ?
                    <MessageBox type={MESSAGES_TYPES.SUCCESS} message='Rol creado con exito'/>
                    :
                    !!createRole.isError ? <MessageBox type={MESSAGES_TYPES.ERROR} 
                                             message={createRole?.error?.response?.data?.message}/>
                    :<></>
                }
                {
                    !errors?.name && !!name && !createRole.isSuccess && !createRole.isError ?
                    <input  type="submit" 
                            value={createRole.isPending ? 'loading...' : 'Agregar'}
                            id={createRole.isPending ? 'add_submit_button__inactive' : ''}
                            className="add_submit_button"/>
                    :<></>
                }
            </form>
        </div>
    </BasicModal>
  )
}

export default AddRoleModal