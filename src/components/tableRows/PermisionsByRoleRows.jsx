import WithOrNoPermiseCeldBody from "../tableCelds/WithOrNoPermiseCeldBody"
import WithOutPermisonCeld from "../tableCelds/WithOutPermisonCeld"
import WithPermisionCeld from "../tableCelds/WithPermisionCeld"
import './styles.css'

const PermisionsByRoleRows = ({ENTITIES, role}) => {
  return (
    ENTITIES.map(entity =>{
        return entity.permissions.map(permision =>{
          return <WithOrNoPermiseCeldBody isActive={role.permissions.includes(`${entity.name}:${permision}`)}
                                          entity={entity}
                                          permision={permision}
                                          role={role}/>
        })
      })
  )
}

export default PermisionsByRoleRows