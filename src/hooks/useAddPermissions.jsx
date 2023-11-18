import {useMutation, useQueryClient} from '@tanstack/react-query'
import Services from '../services/services'
import ENDPOITS from '../services/endpoints'

export const useAddPermissions = ({mutationKey}) => {
    const SERVICE = new Services()

    const queryClient = useQueryClient()

        const addPermissions = useMutation({
            mutationKey: mutationKey,
            mutationFn: (payload) => SERVICE.postRequest(`${ENDPOITS.entities}/${payload.entityId}`, payload),
            onSuccess:()=>{
                queryClient.invalidateQueries({queryKey:['entities']})
            }
        }
        
        )
    

    return {
        addPermissions,
    }
}
