import { stringAdapter } from "../../utils/strings-adapter"
import WithOutPermisonCeld from "../tableCelds/WithOutPermisonCeld"
import WithPermisionCeld from "../tableCelds/WithPermisionCeld"


const TableRows = ({ROLES,ENTITIES}) => {
  return (
    ROLES.map(role =>{
        return(
            <tr key={role.id}>
              <td className='sticky_left' style={{zIndex:'10', backgroundColor:'red'}} >{stringAdapter(role.name)}</td>
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