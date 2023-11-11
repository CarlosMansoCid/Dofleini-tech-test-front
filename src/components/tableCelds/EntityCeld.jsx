import { stringAdapter } from "../../utils/strings-adapter"
import CheckBox from "../checkBox/CheckBox"
import useToogle from "../../hooks/useToogle"

const EntityCeld = ({entity}) => {
  const {toogleValue,setTrue,setFalse} = useToogle()

  return (
    <th key={entity.id} 
        className="entity_celd"
        colspan={entity.permisions.length}
        onMouseEnter={()=>setTrue()}
        onMouseLeave={()=>{setFalse()}}>
        <div className="role_container">
          {stringAdapter(entity.name)}
          {
            !!toogleValue ?
            <CheckBox onActiveAction={()=>{}} onDeactiveAction={()=>{}}/>
            :<></>
          }
        </div>
    </th>
  )
}

export default EntityCeld