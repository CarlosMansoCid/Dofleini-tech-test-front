import {useMutation, useQueryClient} from '@tanstack/react-query'
import Services from '../services/services'
import ENDPOITS from '../services/endpoints'

export const useDeleteAllTheEntityPermissionsFromARole = ({mutationKey}) => {
    const SERVICE = new Services()

    const queryClient = useQueryClient()

        const deleteTheEntityPermissionsFromAllRoles = useMutation({
            mutationKey: mutationKey,
            mutationFn: (payload) => SERVICE.patchRequest(`${ENDPOITS.rolesByEntity}/${payload.entityId}`),
            onSuccess:()=>queryClient.invalidateQueries({
                queryKey:['roles']
            }),
        }
        
        )
    

    return {
        deleteTheEntityPermissionsFromAllRoles
    }
}
