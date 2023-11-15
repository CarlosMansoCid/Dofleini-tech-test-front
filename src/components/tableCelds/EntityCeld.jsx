import { stringAdapter } from "../../utils/strings-adapter"
import CheckBox from "../checkBox/CheckBox"
import useToogle from "../../hooks/useToogle"
import DeleteButton from "../buttons/DeleteButton"

const EntityCeld = ({entity}) => {
  const {toogleValue,setTrue,setFalse} = useToogle()

  return (
    <th key={entity.id} 
        className="entity_celd"
        colspan={entity.permissions.length}
        onMouseEnter={()=>setTrue()}
        onMouseLeave={()=>{setFalse()}}>
        <div className="role_container">
          {
            !!toogleValue ?
            <CheckBox onActiveAction={()=>{}} onDeactiveAction={()=>{}}/>
            :<></>
          }
          {stringAdapter(entity.name)}
          {
            !!toogleValue ?
            <DeleteButton/>
            :<></>
          }
        </div>
    </th>
  )
}

export default EntityCeld