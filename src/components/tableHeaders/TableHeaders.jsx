import EntityCeld from "../tableCelds/EntityCeld"
import './styles.css'
const TableHeaders = ({ENTITIES}) => {
  
  return (
    <>
        <tr>
            <th colSpan='1' className='upper_celd'></th>
            {
            ENTITIES.map((entity)=>{
              if(entity.permissions.length > 0){
                return(
                  <EntityCeld key={entity._id} entity={entity}/>
                  )

                }
              })
              }
        </tr>

    </>
  )
}

export default TableHeaders