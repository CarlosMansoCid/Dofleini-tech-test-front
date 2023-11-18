import {useMutation, useQueryClient} from '@tanstack/react-query'
import Services from '../services/services'
import ENDPOITS from '../services/endpoints'

export const useAddPermissionAtRole = ({mutationKey}) => {
    const SERVICE = new Services()

    const queryClient = useQueryClient()

        const addPermissionAtRole = useMutation({
            mutationKey: mutationKey,
            mutationFn: (payload) => SERVICE.postRequest(`${ENDPOITS.roles}/${payload.id}`, payload),
            onSuccess:()=>queryClient.invalidateQueries({
                queryKey:['roles']
            }),
        }
        
        )
    

    return {
        addPermissionAtRole,
    }
}
