import EntityCeld from "../tableCelds/EntityCeld"

const TableHeaders = ({ENTITIES}) => {
  return (
    <>
        <tr>
            <th colspan='1' className='sticky_left'></th>
            {
            ENTITIES.map((entity)=>{
                return(
                        <EntityCeld key={entity.id} entity={entity}/>
                    )
                })
            }
        </tr>

    </>
  )
}

export default TableHeaders