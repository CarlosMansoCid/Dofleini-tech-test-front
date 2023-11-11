

const TablePermisions = ({ENTITIES}) => {
  return (
    <tr style={{backgroundColor:'green',zIndex:'100'}} className='sticky_top'>
        <th className='sticky_left sticky_top' style={{backgroundColor:'blue',zIndex:'900'}} >Roles</th>
        {
            ENTITIES.map(entity =>{
                return entity.permisions.map(permision =>{
                    return(
                        <th style={{padding:'0 1rem'}}>{permision.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())}</th>
                    )
                })
            })
        }
    </tr>
  )
}

export default TablePermisions