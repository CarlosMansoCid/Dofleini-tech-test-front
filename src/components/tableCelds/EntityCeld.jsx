
const EntityCeld = ({entity}) => {
  return (
    <th key={entity.id} 
        colspan={entity.permisions.length}>
        {entity.name.toLowerCase().replace(/^\w/, (c) => c.toUpperCase()).split('_').join(' ')}
    </th>
  )
}

export default EntityCeld