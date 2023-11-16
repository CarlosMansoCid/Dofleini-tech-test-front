import { Suspense, lazy, useContext } from "react"
import { ModalContext } from "../../../contexts/ModalContext"
const DeleteRoleModal = lazy(()=>import('../deleteRoleModal/DeleteRoleModal'))

export const MODALS_TYPES = Object.freeze({
    DELETE_ROLE: 'delete-role'
})
const ModalsLoader = () =>{
    const {modalPayload, modalIsOpen} = useContext(ModalContext)

    switch(modalPayload?.type){
        case MODALS_TYPES.DELETE_ROLE: return <DeleteRoleModal/>;
        default: return <></>
    }
}

export const ModalsManager = () => {
    return (
        <Suspense fallback={<>cargando...</>}>
            <ModalsLoader/>
        </Suspense>
  )
}
