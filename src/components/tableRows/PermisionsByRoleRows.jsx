import WithOutPermisonCeld from "../tableCelds/WithOutPermisonCeld"
import WithPermisionCeld from "../tableCelds/WithPermisionCeld"
import './styles.css'

const PermisionsByRoleRows = ({ENTITIES, role}) => {
  return (
    ENTITIES.map(entity =>{
        return entity.permisions.map(permision =>{
          return role.permissions.includes(`${entity.name}:${permision}`) ?
          <WithPermisionCeld/>
          :
          <WithOutPermisonCeld/>
        })
      })
  )
}

export default PermisionsByRoleRows