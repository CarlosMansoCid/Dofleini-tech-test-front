import { ENTITIES, ROLES } from "../../mocks/data"
import TableHeaders from "../../components/tableHeaders/TableHeaders"
import TablePermisions from "../../components/tableHeaders/TablePermisions"
import TableRows from "../../components/tableRows/TableRows"
import {useQuery} from '@tanstack/react-query'
import Services from "../../services/services"
import ENDPOINTS from "../../services/endpoints"

const Table = () => {
  const TableServices = new Services()
  const {isLoading, data, isError} = useQuery({
    queryKey: ['entities'],
    queryFn:()=>TableServices.getRequest(ENDPOINTS.entities)
  })

  if(isLoading) return <>Loading...</>
  if(isError) return <>Ha ocurrido un error</>
  
  return (
    <table>
        <TableHeaders ENTITIES={data.statusText ? data.data.entities : []}/>
        <TablePermisions ENTITIES={data.statusText ? data.data.entities : []}/> 
        <TableRows ENTITIES={data.statusText ? data.data.entities : []} ROLES={[]}/>
    </table>
  )
}

export default Table
