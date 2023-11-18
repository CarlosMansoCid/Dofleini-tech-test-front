import {useMutation, useQueryClient} from '@tanstack/react-query'
import Services from '../services/services'
import ENDPOITS from '../services/endpoints'

export const useCreateRole = ({mutationKey, payload}) => {
    const SERVICE = new Services()

    const queryClient = useQueryClient()

        const createRole = useMutation({
            mutationKey: mutationKey,
            mutationFn: (payload) => SERVICE.postRequest(`${ENDPOITS.roles}`, payload),
            onSuccess:()=>queryClient.invalidateQueries({
                queryKey:['roles']
            }),
        }
        
        )
    

    return {
        createRole,
    }
}
