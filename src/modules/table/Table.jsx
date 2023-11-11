import { ENTITIES, ROLES } from "../../mocks/data"
import TableHeaders from "../../components/tableHeaders/TableHeaders"
import TablePermisions from "../../components/tableHeaders/TablePermisions"
import TableRows from "../../components/tableRows/TableRows"


const Table = () => {
  return (
    <table>
        <TableHeaders ENTITIES={ENTITIES}/>
        <TablePermisions ENTITIES={ENTITIES}/> 
        <TableRows ENTITIES={ENTITIES} ROLES={ROLES}/>
    </table>
  )
}

export default Table
