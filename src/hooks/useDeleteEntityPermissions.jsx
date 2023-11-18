import {useMutation, useQueryClient} from '@tanstack/react-query'
import Services from '../services/services'
import ENDPOITS from '../services/endpoints'

export const useDeleteEntityPermissions = ({mutationKey}) => {
    const SERVICE = new Services()

    const queryClient = useQueryClient()

        const deletePermissions = useMutation({
            mutationKey: mutationKey,
            mutationFn: (payload) => SERVICE.patchRequest(`${ENDPOITS.entities}/${payload.entityId}`, {permissions:payload.permissions}),
            onSuccess:()=>{
                queryClient.invalidateQueries({queryKey:['roles']})
                queryClient.invalidateQueries({queryKey:['entities']})
            }
        }
        
        )
    console.log(queryClient.getQueriesData())

    return {
        deletePermissions
    }
}
