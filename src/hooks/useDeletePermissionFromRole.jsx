import {useMutation, useQueryClient} from '@tanstack/react-query'
import Services from '../services/services'
import ENDPOITS from '../services/endpoints'

export const useDeletePermissionFromRole = ({mutationKey}) => {
    const SERVICE = new Services()

    const queryClient = useQueryClient()

        const deletePermissionFromRole = useMutation({
            mutationKey: mutationKey,
            mutationFn: (payload) => SERVICE.patchRequest(`${ENDPOITS.roles}`, payload),
            onSuccess:()=>queryClient.invalidateQueries({
                queryKey:['roles']
            }),
        }
        
        )
    

    return {
        deletePermissionFromRole,
    }
}
