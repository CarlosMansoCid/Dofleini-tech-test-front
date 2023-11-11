import EntityCeld from "../tableCelds/EntityCeld"
import './styles.css'
const TableHeaders = ({ENTITIES}) => {
  return (
    <>
        <tr>
            <th colspan='1' className='upper_celd'></th>
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