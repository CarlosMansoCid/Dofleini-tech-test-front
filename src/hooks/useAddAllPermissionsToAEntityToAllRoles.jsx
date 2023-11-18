import {useMutation, useQueryClient} from '@tanstack/react-query'
import Services from '../services/services'
import ENDPOITS from '../services/endpoints'

export const useAddAllPermissionsToAEntityToAllRoles = ({mutationKey}) => {
    const SERVICE = new Services()

    const queryClient = useQueryClient()

        const addPermissionToAllRoles = useMutation({
            mutationKey: mutationKey,
            mutationFn: (payload) => SERVICE.postRequest(`${ENDPOITS.rolesByEntity}/${payload.entityId}`),
            onSuccess:()=>queryClient.invalidateQueries({
                queryKey:['roles']
            }),
        }
        
        )
    

    return {
        addPermissionToAllRoles,
    }
}
