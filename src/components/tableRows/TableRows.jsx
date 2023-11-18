import RoleCeld from "../tableCelds/RoleCeld"
import PermisionsByRoleRows from "./PermisionsByRoleRows"
import './styles.css'
import Services from '../../services/services'
import ENDPOINTS from '../../services/endpoints'
import { useQuery } from "@tanstack/react-query"

const TableRows = ({ENTITIES}) => {
  const RolesServices = new Services()
  const {isLoading, data, isError} = useQuery({
    queryKey: ['roles'],
    queryFn:()=>RolesServices.getRequest(ENDPOINTS.roles)
  })

  return (
    <>
      {    
        !!data && data.data.roles.map(role =>{
          return(
              <tr key={role._id}>
                <RoleCeld role={role} entities={ENTITIES}/>
                <PermisionsByRoleRows ENTITIES={ENTITIES} role={role}/>
              </tr>
            )
        })
      }
    </>
  )
}

export default TableRows