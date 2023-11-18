import { Suspense, lazy, useContext } from "react"
import { ModalContext } from "../../../contexts/ModalContext"
const DeleteRoleModal = lazy(()=>import('../deleteRoleModal/DeleteRoleModal'))
const AddRoleModal = lazy(()=>import('../addRoleModal/AddRoleModal'))
const AddPermissionAtRoleModal = lazy(()=>import('../addPermissionsAtRoleModal/AddPermissionsAtRoleModal'))
const DeletePermissionFromRole = lazy(()=>import('../deletePermissionFromRole/DeletePermissionFromRole'))
const AddAllPermissions = lazy(()=>import('../addAllThePermissionsFromAEntityAtRoleModal/AddAllThePermissionsFromAEntityAtRoleModal'))
const ClearAllPermissions = lazy(()=>import('../clearAllThePermissionsFromRoleModal/ClearAllThePermissionsFromRoleModal'))
const AddAllEntityPermissionsAtAllRoles = lazy(()=>import('../addAllTheEntityPermissionsToAllRolesModal/AddAllTheEntityPermissionsToAllRolesModal'))
const DeleteAllEntityPermissionsFromAllRoles = lazy(()=>import('../deleteAllTheEntityPermissionsFromAllRoles/DeleteAllTheEntityPermissionsFromAllRoles'))
const DeleteAllEntityPermissions = lazy(()=>import('../deleteAllTheEntityPermissionsModal/DeleteAllTheEntityPermissionsModal'))
const AddEntity = lazy(()=>import('../addEntityModal/AddEntityModal'))

export const MODALS_TYPES = Object.freeze({
    DELETE_ROLE: 'delete-role',
    ADD_ROLE: 'add-role',
    ADD_PERMISSION_AT_ROLE: 'add-permission-at-role',
    DELETE_PERMISSION_FROM_ROLE: 'delete-permission-from-role',
    ADD_ALL_PERMISSIONS: 'add-all-permissions',
    CLEAR_ALL_PERMISSIONS: 'clear-all-permissions',
    ADD_ALL_ENTITY_PERMISSIONS_AT_ALL_ROLES: 'add-all-entity-permissions-at-all-roles',
    DELETE_ALL_ENTITY_PERMISSIONS_FROM_ALL_ROLES: 'delete-all-the-entity-permissions-from-all-roles',
    DELETE_ALL_ENTITY_PERMISSIONS: 'delete-all-entity-permissions',
    ADD_ENTITY: 'add-entity'
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
        case MODALS_TYPES.ADD_ALL_ENTITY_PERMISSIONS_AT_ALL_ROLES: return <AddAllEntityPermissionsAtAllRoles/>
        case MODALS_TYPES.DELETE_ALL_ENTITY_PERMISSIONS_FROM_ALL_ROLES: return <DeleteAllEntityPermissionsFromAllRoles/>
        case MODALS_TYPES.DELETE_ALL_ENTITY_PERMISSIONS: return <DeleteAllEntityPermissions/>;
        case MODALS_TYPES.ADD_ENTITY: return <AddEntity/>
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
