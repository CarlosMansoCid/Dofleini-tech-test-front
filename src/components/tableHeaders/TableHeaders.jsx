
const TableHeaders = ({ENTITIES}) => {
  return (
    <>
        <tr>
            <th colspan='1' className='sticky_left'></th>
            {
            ENTITIES.map((entity)=>{
                return(
                    <th key={entity.id} 
                        colspan={entity.permisions.length}>
                            {entity.name.toLowerCase().replace(/^\w/, (c) => c.toUpperCase()).split('_').join(' ')}
                    </th>
                    )
                })
            }
        </tr>

    </>
  )
}

export default TableHeaders