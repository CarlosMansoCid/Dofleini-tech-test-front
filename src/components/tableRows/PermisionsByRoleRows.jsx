import WithOrNoPermiseCeldBody from "../tableCelds/WithOrNoPermiseCeldBody"
import './styles.css'

const PermisionsByRoleRows = ({ENTITIES, role}) => {
  return (
    ENTITIES.map(entity =>{ 
        return entity.permissions.map(permission =>{
            return <WithOrNoPermiseCeldBody isActive={role.permissions.includes(`${entity.name}:${permission}`)}
                                            entity={entity}
                                            permision={permission}
                                            role={role}/>
            
          
        })
      })
  )
}

export default PermisionsByRoleRows