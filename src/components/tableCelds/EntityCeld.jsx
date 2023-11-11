import { stringAdapter } from "../../utils/strings-adapter"

const EntityCeld = ({entity}) => {
  return (
    <th key={entity.id} 
        colspan={entity.permisions.length}>
        {stringAdapter(entity.name)}
    </th>
  )
}

export default EntityCeld