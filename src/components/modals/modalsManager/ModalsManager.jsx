import { Suspense, lazy, useContext } from "react"
import { ModalContext } from "../../../contexts/ModalContext"
const DeleteRoleModal = lazy(()=>import('../deleteRoleModal/DeleteRoleModal'))
const AddRoleModal = lazy(()=>import('../addRoleModal/AddRoleModal'))

export const MODALS_TYPES = Object.freeze({
    DELETE_ROLE: 'delete-role',
    ADD_ROLE: 'add-role'
})
const ModalsLoader = () =>{
    const {modalPayload} = useContext(ModalContext)

    switch(modalPayload?.type){
        case MODALS_TYPES.DELETE_ROLE: return <DeleteRoleModal/>;
        case MODALS_TYPES.ADD_ROLE: return <AddRoleModal/>
        default: return <></>
    }
}

export const ModalsManager = () => {
    return (
        <Suspense fallback={<></>}>
            <ModalsLoader/>
        </Suspense>
  )
}
