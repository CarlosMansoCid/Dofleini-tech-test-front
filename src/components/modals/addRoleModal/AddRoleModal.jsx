import { useState } from "react"
import { useCreateRole } from "../../../hooks/useCreateRole"
import BasicModal from "../basicModal/BasicModal"
import MessageBox, { MESSAGES_TYPES } from "../messages/MessageBox"
import './addRoleModal.styles.css'
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
        <div className="new_role_modal__content_container">
            <h5>Crear nuevo rol</h5>
            <form onSubmit={handleSubmit(onSubmit)} className="role_form">
                <input type="text" 
                       className="new_role__input"
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
                    !errors?.name && !!name ?
                    <input  type="submit" 
                            value={createRole.isPending ? 'loading...' : 'Agregar'}
                            id={createRole.isPending ? 'inactive' : ''}
                            className="new_role__submit_button"/>
                    :<></>
                }
            </form>
        </div>
    </BasicModal>
  )
}

export default AddRoleModal