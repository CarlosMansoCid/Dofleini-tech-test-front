import {useMutation, useQueryClient} from '@tanstack/react-query'
import Services from '../services/services'
import ENDPOITS from '../services/endpoints'

export const useAddOnePermissionToAllRoles = ({mutationKey}) => {
    const SERVICE = new Services()

    const queryClient = useQueryClient()

        const addOnePermissionToAllRoles = useMutation({
            mutationKey: mutationKey,
            mutationFn: (payload) => SERVICE.putRequest(`${ENDPOITS.roles}`, payload),
            onSuccess:()=>{
                queryClient.invalidateQueries({queryKey:['roles']})
            }
        }
        
        )
    

    return {
        addOnePermissionToAllRoles,
    }
}
