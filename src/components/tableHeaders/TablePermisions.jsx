import PermisionCeld from "../tableCelds/PermisionCeld"
import './styles.css'

const TablePermisions = ({ENTITIES}) => {
  return (
    <tr style={{zIndex:'100'}} className='sticky_top'>
        <th className='roles_header'>Roles</th>
        {
            ENTITIES.map(entity =>{
                return entity.permissions.map(permision =>{
                    return(
                        <PermisionCeld permision={permision}/>
                    )
                })
            })
        }
    </tr>
  )
}

export default TablePermisions