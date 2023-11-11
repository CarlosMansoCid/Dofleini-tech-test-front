import { stringAdapter } from "../../utils/strings-adapter"
import WithOutPermisonCeld from "../tableCelds/WithOutPermisonCeld"
import WithPermisionCeld from "../tableCelds/WithPermisionCeld"
import './styles.css'


const TableRows = ({ROLES,ENTITIES}) => {
  return (
    ROLES.map(role =>{
        return(
            <tr key={role.id}>
              <td className='role_name'>{stringAdapter(role.name)}</td>
              {
                ENTITIES.map(entity =>{
                  return entity.permisions.map(permision =>{
                    return role.permissions.includes(`${entity.name}:${permision}`) ?
                    <WithPermisionCeld/>
                    :
                    <WithOutPermisonCeld/>
                  })
                })
              }
            </tr>
        )
    })
  )
}

export default TableRows