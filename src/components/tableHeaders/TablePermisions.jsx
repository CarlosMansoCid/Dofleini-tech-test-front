import PermisionCeld from "../tableCelds/PermisionCeld"


const TablePermisions = ({ENTITIES}) => {
  return (
    <tr style={{backgroundColor:'green',zIndex:'100'}} className='sticky_top'>
        <th className='sticky_left sticky_top' style={{backgroundColor:'blue',zIndex:'900'}} >Roles</th>
        {
            ENTITIES.map(entity =>{
                return entity.permisions.map(permision =>{
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