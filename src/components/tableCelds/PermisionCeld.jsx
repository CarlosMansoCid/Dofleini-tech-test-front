import { stringAdapter } from '../../utils/strings-adapter'

const PermisionCeld = ({permision}) => {
  return (
    <th style={{padding:'0 1rem'}}>{stringAdapter(permision)}</th>
  )
}

export default PermisionCeld