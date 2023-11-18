import {useMutation, useQueryClient} from '@tanstack/react-query'
import Services from '../services/services'
import ENDPOITS from '../services/endpoints'

export const useDeleteRole = ({mutationKey}) => {
    const SERVICE = new Services()

    const queryClient = useQueryClient()

        const deleteRole = useMutation({
            mutationKey: mutationKey,
            mutationFn: (id) => SERVICE.deleteRequest(`${ENDPOITS.roles}/${id}`),
            onSuccess:()=>queryClient.invalidateQueries({
                queryKey:['roles']
            }),
        }
        
        )
    

    return {
        deleteRole,
    }
}
