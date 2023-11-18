import { useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"

const useGetIfAllRolesHaveAllPermissionsOfAEntity = (entity) => {
    
    const queryClient = useQueryClient()
    const cachedData = queryClient.getQueriesData({queryKey: ['roles']})
    const {roles} = cachedData.length > 0 ? cachedData[0][1].data : []

    
    const permissions = !!roles && roles?.length > 0 ? roles?.map(role => role.permissions) : []

    const rolesWithEntityName = useMemo(()=>permissions.map(permission =>{
            return permission.filter(perm =>{
                return perm.includes(entity.name)
            })?.length === entity.permissions.length     
        }), [roles, entity.permissions])
    const haveAllThePermissions = rolesWithEntityName[0]
    
    return {haveAllThePermissions} 
    
}

export default useGetIfAllRolesHaveAllPermissionsOfAEntity