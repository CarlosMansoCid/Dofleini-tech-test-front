import {useMutation, useQueryClient} from '@tanstack/react-query'
import Services from '../services/services'
import ENDPOITS from '../services/endpoints'

export const useClearAllThePermissionFromRole = ({mutationKey}) => {
    const SERVICE = new Services()

    const queryClient = useQueryClient()

        const clearPermissionFromRole = useMutation({
            mutationKey: mutationKey,
            mutationFn: (payload) => SERVICE.putRequest(`${ENDPOITS.roles}/${payload.id}`),
            onSuccess:()=>queryClient.invalidateQueries({
                queryKey:['roles']
            }),
        }
        
        )
    

    return {
        clearPermissionFromRole,
    }
}
