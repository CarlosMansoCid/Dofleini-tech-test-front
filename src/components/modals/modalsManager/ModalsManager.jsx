import { Suspense, lazy, useContext } from "react"
import { ModalContext } from "../../../contexts/ModalContext"
const DeleteRoleModal = lazy(()=>import('../deleteRoleModal/DeleteRoleModal'))
const AddRoleModal = lazy(()=>import('../addRoleModal/AddRoleModal'))
const AddPermissionAtRoleModal = lazy(()=>import('../addPermissionsAtRoleModal/AddPermissionsAtRoleModal'))
const DeletePermissionFromRole = lazy(()=>import('../deletePermissionFromRole/DeletePermissionFromRole'))
const AddAllPermissions = lazy(()=>import('../addAllThePermissionsFromAEntityAtRoleModal/AddAllThePermissionsFromAEntityAtRoleModal'))
const ClearAllPermissions = lazy(()=>import('../clearAllThePermissionsFromRoleModal/ClearAllThePermissionsFromRoleModal'))

export const MODALS_TYPES = Object.freeze({
    DELETE_ROLE: 'delete-role',
    ADD_ROLE: 'add-role',
    ADD_PERMISSION_AT_ROLE: 'add-permission-at-role',
    DELETE_PERMISSION_FROM_ROLE: 'delete-permission-from-role',
    ADD_ALL_PERMISSIONS: 'add-all-permissions',
    CLEAR_ALL_PERMISSIONS: 'clear-all-permissions'
})
const ModalsLoader = () =>{
    const {modalPayload} = useContext(ModalContext)

    switch(modalPayload?.type){
        case MODALS_TYPES.DELETE_ROLE: return <DeleteRoleModal/>;
        case MODALS_TYPES.ADD_ROLE: return <AddRoleModal/>;
        case MODALS_TYPES.ADD_PERMISSION_AT_ROLE: return <AddPermissionAtRoleModal/>;
        case MODALS_TYPES.DELETE_PERMISSION_FROM_ROLE: return <DeletePermissionFromRole/>;
        case MODALS_TYPES.ADD_ALL_PERMISSIONS: return <AddAllPermissions/>
        case MODALS_TYPES.CLEAR_ALL_PERMISSIONS: return <ClearAllPermissions/>
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
