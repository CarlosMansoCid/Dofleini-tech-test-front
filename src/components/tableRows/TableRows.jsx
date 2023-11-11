import RoleCeld from "../tableCelds/RoleCeld"
import PermisionsByRoleRows from "./PermisionsByRoleRows"
import './styles.css'


const TableRows = ({ROLES,ENTITIES}) => {
  return (
    <>
      {    
        ROLES.map(role =>{
          return(
              <tr key={role.id}>
                <RoleCeld role={role}/>
                <PermisionsByRoleRows ENTITIES={ENTITIES} role={role}/>
              </tr>
            )
        })
      }
    </>
  )
}

export default TableRows