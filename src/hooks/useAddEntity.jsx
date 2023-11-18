import {useMutation, useQueryClient} from '@tanstack/react-query'
import Services from '../services/services'
import ENDPOITS from '../services/endpoints'

export const useAddEntity = ({mutationKey}) => {
    const SERVICE = new Services()

    const queryClient = useQueryClient()

        const addEntity = useMutation({
            mutationKey: mutationKey,
            mutationFn: (payload) => SERVICE.postRequest(`${ENDPOITS.entities}`, payload),
            onSuccess:()=>{
                queryClient.invalidateQueries({queryKey:['roles']})
                queryClient.invalidateQueries({queryKey:['entities']})
            }
        }
        
        )
    

    return {
        addEntity,
    }
}
